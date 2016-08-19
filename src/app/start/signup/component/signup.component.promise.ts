import { Component, OnInit }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
// import { FormGroup }        from '@angular/forms';

import { User}          from '../service/user';
import { SignupPromiseService }       from '../service/signup.service.promise';



@Component({
  templateUrl: '../view/signup.html',
  styleUrls: [ '../view/signup.scss'],
  providers: [ SignupPromiseService ]
})

export class SignupPromiseComponent {
  errorMessage: string;
  // messageEmail: string;
  // messagePassword: string;
  // messageFirstName: string;
  // messageLastName: string;
  users: User[];

  constructor (private signupPromiseService: SignupPromiseService) {
    // this.setMessage();
  }

  // setMessage() {
  //   this.message = 'Logged ');
  // }

  ngOnInit() { this.getUsers(); }

  getUsers() {
  this.signupPromiseService.getUsers()
                             .then(
                               users => this.users = users,
                               error =>  this.errorMessage = <any>error);
  }

  signup (email, password, firstName, lastName) {
    // let firstNameCountLetters = firstName.length;
    // let lastNameCountLetters = lastName.length;
    // if (!email) { 
    //   return this.messageEmail = 'Please enter email'; 
    // } else if(!password){
    //   return this.messagePassword = 'Please enter password'; 
    // } else if (firstNameCountLetters > 10 ) {
    //   return this.messageFirstName = 'Please enter a shorter firstName';
    // } else if (lastNameCountLetters > 15) {
    //   return this.messageLastName = 'Please enter a shorter lastName';
    // } 
    this.signupPromiseService.addUser(email, password, firstName, lastName)
                             .then(
                               user  => this.users.push(user),
                               error => this.errorMessage = <any>error);
   

  }
}