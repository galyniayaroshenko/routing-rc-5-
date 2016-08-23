import { Component, OnInit }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { FormGroup }        from '@angular/forms';

import { User}          from '../service/user';
// import { SignupPromiseService }       from '../service/signup.service.promise';
import { OverPromiseService }       from '../../../service/over.service';

@Component({
  templateUrl: '../view/signup.html',
  styleUrls: [ '../view/signup.scss'],
  providers: [ OverPromiseService ]
})

export class SignupPromiseComponent {
  errorMessage: string;
  users: any;

  constructor (private signupPromiseService: OverPromiseService) {
    // this.setMessage();
  }

  // setMessage() {
  //   this.message = 'Logged ');
  // }

  ngOnInit() { this.getUsers(); }
  getUsers() {
    this.signupPromiseService.get('http://private-34927-authapp.apiary-mock.com/users')
                             .then(
                               users => this.users = users,
                               error =>  this.errorMessage = <any>error);
  }

  signup ( firstName, lastName, email, birth) {
    let body = JSON.stringify({ firstName, lastName, email, birth });
    console.log('body', body);
    this.signupPromiseService.post('http://private-34927-authapp.apiary-mock.com/register', body)
                             .then(
                               user  => this.users.push(user),
                               error => this.errorMessage = <any>error);
  }

  // signup (email, password, firstName, lastName) {
  //   this.signupPromiseService.addUser(email, password, firstName, lastName)
  //                            .then(
  //                              user  => this.users.push(user),
  //                              error => this.errorMessage = <any>error);
   

  // }
}