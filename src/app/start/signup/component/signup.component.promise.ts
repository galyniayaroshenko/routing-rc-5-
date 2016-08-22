import { Component, OnInit }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { FormGroup }        from '@angular/forms';

import { User}          from '../service/user';
// import { SignupPromiseService }       from '../service/signup.service.promise';
import { HomePromiseService }       from '../../../service/over-service';
// import { Control,
//          ControlGroup, 
//          FormBuilder, 
//          Validators} from '@angular/common';

// import { CustomValidator } from './custom-validator';

@Component({
  templateUrl: '../view/signup.html',
  styleUrls: [ '../view/signup.scss'],
  providers: [ HomePromiseService ]
})

export class SignupPromiseComponent {
  errorMessage: string;
  // form: ControlGroup;
  // messageEmail: string;
  // messagePassword: string;
  // messageFirstName: string;
  // messageLastName: string;
  users: any;

  constructor (private signupPromiseService: HomePromiseService) {
    // this.setMessage();
  //  this.form = formbuilder.group({
  //               username: ['', Validators.compose([Validators.required, CustomValidator.underscorecheck]), 
  //               CustomValidator.useruniquecheck],
  //               password: []
  //           })
  }

  // setMessage() {
  //   this.message = 'Logged ');
  // }

  ngOnInit() { this.getUsers(); }

  // getUsers() {
  // this.signupPromiseService.getUsers()
  //                            .then(
  //                              users => this.users = users,
  //                              error =>  this.errorMessage = <any>error);
  // }
  getUsers() {
    
    this.signupPromiseService.get('http://private-34927-authapp.apiary-mock.com/users')
                     .then(
                       users => this.users = users,
                       error =>  this.errorMessage = <any>error);
  }
  // signup (email, password, firstName, lastName) {
  //   let body = JSON.stringify({ email, password, firstName, lastName });
  // let headers = new Headers({ 'Content-Type': 'application/json' });
  // let options = new RequestOptions({ headers: headers });
  //   this.signupPromiseService.addUser(email, password, firstName, lastName)
  //                            .then(
  //                              user  => this.users.push(user),
  //                              error => this.errorMessage = <any>error);
  // }

  // signup (email, password, firstName, lastName) {
  //   // let firstNameCountLetters = firstName.length;
  //   // let lastNameCountLetters = lastName.length;
  //   // if (!email) { 
  //   //   return this.messageEmail = 'Please enter email'; 
  //   // } else if(!password){
  //   //   return this.messagePassword = 'Please enter password'; 
  //   // } else if (firstNameCountLetters > 10 ) {
  //   //   return this.messageFirstName = 'Please enter a shorter firstName';
  //   // } else if (lastNameCountLetters > 15) {
  //   //   return this.messageLastName = 'Please enter a shorter lastName';
  //   // } 
  //   this.signupPromiseService.addUser(email, password, firstName, lastName)
  //                            .then(
  //                              user  => this.users.push(user),
  //                              error => this.errorMessage = <any>error);
   

  // }
}