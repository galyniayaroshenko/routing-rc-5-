import { NgModule }                            from '@angular/core';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HttpExtService } from './service/http.service';
import { HttpConfigService } from './service/http-config.service';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

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
    HttpExtService,
    HttpConfigService 
  ],
  bootstrap: [ AppComponent  ]
})
export class AppModule {
}
