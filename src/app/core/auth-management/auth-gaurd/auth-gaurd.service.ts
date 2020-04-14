import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RoleService } from '@services/role-service/role.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {
  constructor(private router: Router, private role: RoleService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.role.getRole() === 'admin') {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        // background: '#fff',
        // backdrop: `rgba(0,0,123,0.4)`,
        text: 'You Are Not Allowed To View This Page.'
      }).then((result) => {
        if (result.value) {
          // navigating to login page
          this.router.navigate(['/login']);
        }
      });
    }
  }
}
