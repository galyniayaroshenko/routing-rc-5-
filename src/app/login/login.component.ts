import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './view/login.html',
  styleUrls: ['./view/login.scss']
})
export class Login implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Login');
  }

}
