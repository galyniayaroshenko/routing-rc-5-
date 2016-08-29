import { Component, OnInit } from '@angular/core';
import { Router,
         NavigationExtras }  from '@angular/router';
import { Http, Headers }     from '@angular/http';
import {
  FORM_PROVIDERS,
  FORM_DIRECTIVES,
  ControlGroup,
  FormBuilder,
  Validators
} from '@angular/common';
         
// import { LoginService }      from '../service/login.service';

@Component({
  templateUrl: '../view/login.html',
  styleUrls: [ '../view/login.scss' ]
})

export class LoginComponent {
  // isLoggedIn: boolean = false;

  constructor( public router: Router, public http: Http ) {}

  login(email, password) {
    let body = JSON.stringify({ email, password });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('http://private-34927-authapp.apiary-mock.com/login', body, {  headers: headers })
      .subscribe(
        response => {
          if (response.json().status == 'OK') {
            // this.isLoggedIn = true;
            console.log(response.json());
            localStorage.setItem('authToken', response.json().data.authToken);
            this.router.navigate(['/home']);
            console.log(localStorage.getItem('authToken'));
          } else {
            alert('email address or password you entered is not correct');
            console.log('response.json().status.success', response.json().status.success);
          }
          console.log('response.json()', response.json());
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
     );
  }

}

