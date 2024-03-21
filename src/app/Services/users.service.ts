import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  checkUsername(username: any) {
    if (username === "")
      return false
    return true
  }

  checkPassword(pass: any) {
    if (pass === "")
      return false
    return true
  }
}
