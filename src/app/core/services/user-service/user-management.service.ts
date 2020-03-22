import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserManagementService {
  constructor() {}

  getUserData() {
    return JSON.parse(localStorage.getItem("userdata"));
  }
  setUserData(userdata) {
    localStorage.setItem("userdata", JSON.stringify(userdata));
  }
}
