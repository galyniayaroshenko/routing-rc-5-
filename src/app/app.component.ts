import { Component, OnInit }  from '@angular/core';

import { HttpExtService } from './service/http.service';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  providers: [HttpExtService ]
})

export class AppComponent implements OnInit {
  constructor(private httpExtService : HttpExtService ) {}

  ngOnInit() {
    this.httpExtService.get('/users').OK(data => {
      console.log('data!!', data);
    });
  }
}