import { Component, OnInit }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

import { OverPromiseService }       from '../../../service/over.service';

@Component({
  templateUrl: '../view/home.html',
  styleUrls: [ '../view/home.scss' ],
  providers: [ OverPromiseService]
})

export class HomePromiseComponent implements OnInit {
  errorMessage: string;
  users: any;
  mode = 'Promise';

  constructor (private homePromiseService: OverPromiseService ) {}

  ngOnInit() { this.getUsers(); }

  getUsers() {
    this.homePromiseService.get('http://private-34927-authapp.apiary-mock.com/users')
                           .then(
                             users => this.users = users,
                             error =>  this.errorMessage = <any>error);
  }
}










// import { Component, OnInit }        from '@angular/core';
// import { Router,
//          NavigationExtras } from '@angular/router';

//  import { Service }       from '../../../service/service';

// @Component({
//   templateUrl: '../view/home.html',
//   styleUrls: [ '../view/home.scss' ],
//   providers: [ Service]
// })

// export class HomePromiseComponent implements OnInit {
//   errorMessage: string;
//   users: any;
//   mode = 'Promise';

//   constructor (private homePromiseService: Service ) {}

//   ngOnInit() { this.getUsers(); }

//   getUsers() {
    
//     this.homePromiseService.getAll()
//                      .then(
//                        users => this.users = users,
//                        error =>  this.errorMessage = <any>error);
//   }
// }