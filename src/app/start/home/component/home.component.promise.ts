import { Component, OnInit }        from '@angular/core';
import { Router,
         NavigationExtras }         from '@angular/router';

import { HomePromiseService }       from '../service/home.service.promise';

@Component({
  templateUrl: '../view/home.html',
  styleUrls: [ '../view/home.scss' ],
  providers: [ HomePromiseService]
})

export class HomePromiseComponent implements OnInit {
  errorMessage: string;
  users: any;
  mode = 'Promise';

  constructor (public router: Router, private homePromiseService: HomePromiseService ) {}

  ngOnInit() { this.getUsers(); }

  getUsers() {
    this.homePromiseService.getUser()
      .then(
        users => this.users = users,
        error =>  this.errorMessage = <any>error);
  }
  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/start']);
  }
}










// import { Component, OnInit }        from '@angular/core';
// import { Router,
//          NavigationExtras }         from '@angular/router';

//  import { Service }                 from '../../../service/service';

// @Component({
//   templateUrl: '../view/home.html',
//   styleUrls: [ '../view/home.scss' ],
//   providers: [ Service]
// })

// export class HomePromiseComponent implements OnInit {
//   errorMessage: string;
//   users: any;
//   mode = 'Promise';

//   constructor (private service: Service ) {}

//   ngOnInit() { this.getUsers(); }

//   getUsers() {
    
//   this.service.getAll()
//     .then(
//       users => this.users = users,
//       error =>  this.errorMessage = <any>error);
//   }
// }