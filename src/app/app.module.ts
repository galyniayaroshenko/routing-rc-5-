import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { HeroesModule } from './start/heroes/heroes.module';
import { LoginModule } from './start/login/login.module';
import { SignupModule } from './start/signup/signup.module';
import { HomeModule } from './start/home/home.module';
import { StartModule } from './start/start.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
