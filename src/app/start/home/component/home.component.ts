import { Component, OnInit }        from '@angular/core';
import { Router,
         NavigationExtras }         from '@angular/router';

import { HomeService }                 from '../service/home.service';
// import { HttpExtService } from '../../../service/http.service';
// import { HttpConfigService } from '../../../service/http-config.service';
import { ObjectValidatorService } from '../../../service/object-validator.service';

@Component({
  templateUrl: '../view/home.html',
  styleUrls: [ '../view/home.scss' ],
  providers: [ ObjectValidatorService, HomeService ]
})

export class HomeComponent implements OnInit {
  errorMessage: string;
  users: any;
  mode = 'Promise';

  constructor (private homeService: HomeService, private objectValidatorService: ObjectValidatorService ) {}

  ngOnInit() { this.getUsers(); }

  getUsers() {
    this.users = [];
    this.homeService.getAll().OK(data => {
      this.users = data;
      console.log('this.users', this.users);
    });
    console.log('validate();', 
      JSON.stringify(this.objectValidatorService.validate(
        {
          status: 3,
          data: {vfd: 'vd'}
        }, 
        {
          status: {
            required: true,
            type: Array,
            valueSubType: String,
            // exclusion: ['OK', 'ERROR:general', 'ERROR:target', 'asd', 5,  true, 'cds', 'dsa'],
            // inclusion: ['smile', 'OK'],
            range: [1, 20]
          },
          data: {
            required: true,
            type: Number,
            range: [1, 20]
            // exclusion: ['OK', 'ERROR:general', 'ERROR:target', 'asd', 34, true],
            // inclusion: ['smile', 'OK']
          }
        }), null, 2
      )
    );
  }
}
