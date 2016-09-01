// import { Component, OnInit }        from '@angular/core';
// import { Router,
//          NavigationExtras }         from '@angular/router';
// import { FormGroup }                from '@angular/forms';

// import { User}                  from '../service/user';
// import { SignupPromiseService } from '../service/signup.service.promise';
// // import { OverPromiseService }       from '../../../service/over.service';

// @Component({
//   templateUrl: '../view/signup.html',
//   styleUrls: [ '../view/signup.scss'],
//   providers: [ SignupPromiseService ]
// })

// export class SignupPromiseComponent {
//   errorMessage: string;
//   users: any;

//   constructor (private signupPromiseService: SignupPromiseService) {}

//   ngOnInit() { this.getUsers(); }
//   getUsers() {
//     this.signupPromiseService.getUsers()
//       .then(
//         users => this.users = users,
//         error =>  this.errorMessage = <any>error);
//   }

//   signup ( firstName, lastName, email, birth ) {
//     this.signupPromiseService.addUser(firstName, lastName, email, birth)
//       .then(
//         user  => this.users.push(user),
//         error => this.errorMessage = <any>error);
//   }
// }