import { Injectable } from '@angular/core';
import { User } from './user';
import { chequear_usuario } from './user-login-mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor() {
    this.user = {
      id: null,
      email: '',
      password: '',
    };
  }

  ingresar(user: User): boolean {
    // return this.http.post<User>(`${this.userURL}/auth/signin`, user);
    return chequear_usuario(user);
  }
}
