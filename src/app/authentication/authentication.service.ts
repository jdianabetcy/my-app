import { Injectable } from '@angular/core';
import { user } from '../user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

let users = [new user('admin', '123'), new user('user', '123')];

@Injectable()
export class AuthenticationService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  user = new user();

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private _router: Router) {}

  getUserType() {
    return localStorage.getItem('user');
  }

  isSuperAdmin() {
    if (localStorage.getItem('user') === 'admin') {
      console.log('', localStorage.getItem('user'));
      return true;
    } else {
      console.log('', localStorage.getItem('user'));
      return false;
    }
  }

//   login(email, password) {
//     this.user.email = email;
//     this.user.password = password;

//     let authenticatedUser = users.find((u) => u.email === this.user.email);
//     if (authenticatedUser && authenticatedUser.password == this.user.password) {
//       localStorage.setItem('user', this.user.email);
//       this._router.navigate(['/home']);
//       this.loggedIn.next(true);
//     } else {
//       alert('Please Enter Valid email/Password..!!');
//       this.loggedIn.next(false);
//     }
//   }
  logout() {
    this.loggedIn.next(false);
    this._router.navigate(['']);
  }
}
