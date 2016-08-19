import { Component, OnInit }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

import { User}          from '../service/user';
import { HomePromiseService }       from '../service/home.service.promise';

@Component({
  templateUrl: '../view/home.html',
  styleUrls: [ '../view/home.scss' ],
  providers: [ HomePromiseService ]
})

export class HomePromiseComponent implements OnInit {
  errorMessage: string;
  users: User[];
  mode = 'Promise';

  constructor (private homePromiseService: HomePromiseService ) {}

  ngOnInit() { this.getUsers(); }

  getUsers() {
    this.homePromiseService.getUser()
                     .then(
                       users => this.users = users,
                       error =>  this.errorMessage = <any>error);
  }
}