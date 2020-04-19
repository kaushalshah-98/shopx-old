import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

/**
 * Provides an abstract wrapper around showing a MatSnackbar
 * notification based on global environment or API provided
 * configuration.
 *
 * This class Listens for the authentication state to change.
 * Once the state becomes authenticated, retrieve the startup
 * configuration from the API service. Once de-authenticated
 * set the _params to undefined and unsubscribe.
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  /**
   * Constructor
   * @param toast  Toaster
   */
  constructor(private toastr: ToastrService) {}

  show(message: string) {
    return this.toastr.success(message);
  }
  success(message: string) {
    return this.toastr.success(message, 'Success');
  }
  error(message: string) {
    return this.toastr.error(message, 'Error');
  }
  warning(message: string) {
    return this.toastr.warning(message, 'Warning');
  }
  info(message: string) {
    return this.toastr.info(message, 'Information');
  }
}
