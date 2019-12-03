import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginForm: FormGroup;
  // tslint:disable-next-line: variable-name
  error_messages = {
    email: [
      {type: 'required', message: 'Username is required.'},
      {type: 'minLength', message: 'Username length must be longer than or equal to 6 characters.'},
      {type: 'maxLength', message: 'Username length must be lesser than or equal to 50 characters.'},
      {type: 'pattern', message: 'Please enter valid Username/Email .'},
  ],
    password: [
      {type: 'required', message: 'Password is required.'},
      {type: 'minLength', message: 'Password length must be longer than or equal to 6 characters.'},
      {type: 'maxLength', message: 'Password length must be lesser than or equal to 30 characters.'},
      {type: 'pattern', message: 'Password must contain numbers,uppercase and lowercase characters .'},
  ]
  };

    constructor(
      private router: Router,
      public formBuilder: FormBuilder
    ) {
      this.loginForm = this.formBuilder.group({
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength[6],
          Validators.maxLength[30],
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])),
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength[6],
          Validators.maxLength[50],
  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
      });
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit(){}

    login() {
    //  var param1 = this.loginForm.value.email
    // var param1 = "Anna"
      console.log('email:', this.loginForm.value.email);
      console.log('password:', this.loginForm.value.password);

      if (!this.loginForm.invalid){
      this.router.navigate(['second-page'])
      } else{
        alert('Please enter all fields')

      }

    }
 }
