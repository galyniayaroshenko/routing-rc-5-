import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './view/signup.html',
  styleUrls: ['./view/signup.scss']
})
export class Signup implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Singup');
  }

}
