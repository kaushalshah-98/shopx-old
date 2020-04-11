import { Component, Input } from '@angular/core';
import { UserManagementService } from '@services/user-service/user-management.service';
import { RoleService } from '@services/role-service/role.service';
import { IMenu } from '@shared/interfaces';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
@Component({
  selector: 'app-left-panel-container',
  templateUrl: './left-panel.container.html',
  styleUrls: ['./left-panel.container.scss']
})
export class LeftPanelContainer {
  @Input() menuItems: IMenu[];
  userdata: any;
  constructor(
    private userservice: UserManagementService,
    private role: RoleService,
    private property: PropertyAccessService
  ) {}
}
