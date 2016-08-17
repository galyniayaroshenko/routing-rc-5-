import { Component } from '@angular/core';

import { ApiService } from './api.service';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
    // Do something with api
  }
}
