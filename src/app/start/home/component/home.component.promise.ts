import { Component, OnInit }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

// import { User}          from '../service/user';
// import { HomePromiseService }       from '../service/home.service.promise';
import { HomePromiseService }       from '../../../service/over-service';
//  import { Service }       from '../../../service/service';

@Component({
  templateUrl: '../view/home.html',
  styleUrls: [ '../view/home.scss' ],
  providers: [ HomePromiseService]
})

export class HomePromiseComponent implements OnInit {
  errorMessage: string;
  users: any;
  mode = 'Promise';

  constructor (private homePromiseService: HomePromiseService ) {}

  ngOnInit() { this.getUsers(); }

  // getUsers() {
  //   this.homePromiseService.getUser()
  //                    .then(
  //                      users => this.users = users,
  //                      error =>  this.errorMessage = <any>error);
  // }
  // private usersUrl = 'http://private-34927-authapp.apiary-mock.com/users';
  getUsers() {
    
    this.homePromiseService.get('http://private-34927-authapp.apiary-mock.com/users')
                     .then(
                       users => this.users = users,
                       error =>  this.errorMessage = <any>error);
  }
}