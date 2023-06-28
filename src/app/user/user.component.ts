import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  problem: Boolean = false;
  form: FormGroup;
  user: User;
  service: UserService;
  router: Router;

  constructor(private builder: FormBuilder,) {
    this.form = this.builder.group({
      email: [''],
      password: ['']
    });

    this.user = {
      id: null,
      email: '',
      password: '',
    };

    this.service = new UserService();
    this.router = new Router();
  }

  // ingreso de usuario ...
  ingresar(): void {
    this.user.email = this.form.get('email')?.value;
    this.user.password = this.form.get('password')?.value;

    if (this.service.ingresar(this.user)) {
      this.problem = false;
      this.router.navigate(['navigation']);
    } else{
      this.problem = true;
    }

    // this.service.ingresar(user).subscribe
    //   ({
    //     next: res => {
    //       this.users$ = this.service.obtenerUsuarios();
    //       this.router.navigate(['navigation']);
    //     },
    //     error: err => {
    //       this.problem = true;
    //     }
    //   })
  }
}
