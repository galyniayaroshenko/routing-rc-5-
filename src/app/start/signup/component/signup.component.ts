import { Component, OnInit }        from '@angular/core';
import { FormGroup }                from '@angular/forms';

import { User}                  from '../service/user';
import { SignupService } from '../service/signup.service';

@Component({
  templateUrl: '../view/signup.html',
  styleUrls: [ '../view/signup.scss'],
  providers: [ SignupService ]
})

export class SignupComponent {
  errorMessage: string;
  users: any;

  constructor (private signupService: SignupService) {}

  // ngOnInit() { this.getUsers(); }

  // getUsers() {
  //   this.signupService.getAll().OK(data => {
  //     this.users = data;
  //     console.log('this.users', this.users);
  //   });
  // }

  // signup ( firstName, lastName, email, birth ) {
  //   this.signupService.signup(firstName, lastName, email, birth)
  //     // .OK(data => {
  //     //   user  => this.users.push(user);
  //     //   console.log('user', user);
  //     // });
  // }
}