import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './view/start-page.html',
  styleUrls: ['./view/start-page.scss']
})
export class StartPage implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
