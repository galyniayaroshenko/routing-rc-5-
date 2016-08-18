import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { UserData } from './user-data';

import { HeroesModule } from './start/heroes/heroes.module';
import { LoginModule } from './start/login/login.module';
import { SignupModule } from './start/signup/signup.module';
import { HomeModule } from './start/home/home.module';
import { StartModule } from './start/start.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    HeroesModule,
    LoginModule,
    SignupModule,
    HomeModule,
    StartModule
  ],
  declarations: [
    AppComponent
  ],
    providers: [
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: UserData }                // in-mem server data
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
