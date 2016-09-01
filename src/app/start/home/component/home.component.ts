import { Component, OnInit }        from '@angular/core';
import { Router,
         NavigationExtras }         from '@angular/router';

import { HomeService }                 from '../service/home.service';

@Component({
  templateUrl: '../view/home.html',
  styleUrls: [ '../view/home.scss' ]
})

export class HomeComponent implements OnInit {
  errorMessage: string;
  users: any;
  mode = 'Promise';

  constructor (private homeService: HomeService ) {}

  ngOnInit() { this.getUsers(); }

  getUsers() {
    this.users = [];
    this.homeService.getAll().OK(data => {
      this.users = data;
      //console.log('this.users', this.users);
    });
  }
}