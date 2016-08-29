// import { Component, OnInit }        from '@angular/core';
// import { Router,
//          NavigationExtras }         from '@angular/router';

// import { User}                      from '../service/user';
// import { HomeService }              from '../service/home.service'

// const styles   = require('../view/home.scss');
// const template = require('../view/home.html');

// @Component({
//   template: template,
//   styles: [ styles ],
//   providers: [ HomeService ]
// })

// export class HomeComponent implements OnInit {
//   errorMessage: string;
//   users: User[];
//   mode = 'Observable';

//   constructor (private homeService: HomeService) {}

//   ngOnInit() { this.getUsers(); }

//   getUsers() {
//     this.homeService.getUser()
//       .subscribe(
//         users => this.users = users,
//         error =>  this.errorMessage = <any>error);
//   }
  
// }