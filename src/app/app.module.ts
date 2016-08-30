import { NgModule }                            from '@angular/core';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';
// import { AppSettings }   from './config';
// import { HttpMethods }          from './httpMethods';

import { InMemoryBackendService, 
         SEED_DATA } from 'angular2-in-memory-web-api';

import { LoginModule }  from './start/login/login.module';
import { SignupModule } from './start/signup/signup.module';
import { HomeModule }   from './start/home/home.module';
import { StartModule }  from './start/start.module';

@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    routing,
    SignupModule,
    HomeModule,
    StartModule
  ],
  declarations: [
    AppComponent
  ],
    providers: [
    // {provide(API_ENDPOINT, { useValue='http://private-34927-authapp.apiary-mock.com/' })}
    // { provide: , useClass: AppSettings } 
    // { provide: XHRBackend, useClass: InMemoryBackendService } 
  ],
  bootstrap: [ AppComponent  ]
})
export class AppModule {
}
