import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { HeroesModule } from './heroes/heroes.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { HomeModule } from './login/home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HeroesModule,
    LoginModule,
    SignupModule,
    HomeModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
