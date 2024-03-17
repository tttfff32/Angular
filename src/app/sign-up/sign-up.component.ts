import { Component ,OnInit   } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  form: FormGroup
  constructor() {
    this.form = new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        password: new FormControl('', Validators.minLength(8)),
      }
    )
  }
  afterLogin:boolean=false;
addCourse(){
  
}
  signUp() {
    if (!this.form.value.username)
      alert('username no valid😪')
    if (this.form.valid)
      alert('login succesful!!!')
      this.afterLogin=true;

  }
}
