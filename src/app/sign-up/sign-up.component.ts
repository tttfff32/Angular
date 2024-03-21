import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  form: FormGroup
  constructor(private userSRV: UsersService) {
    this.form = new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        password: new FormControl('', Validators.minLength(8)),
      }
    )
  }
  afterLogin: boolean = false;


  signUp() {
    if (!(this.userSRV.checkUsername(this.form.value.username)))
      alert('username no valid😪')
    if(!(this.userSRV.checkPassword(this.form.value.password)))
      alert('password no valid😪')
    else
    {
      alert('login succesful!!!')
      this.afterLogin = true;
    }
  }
}
