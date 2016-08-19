export const authProviders = [];

import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './component/home.component';
import { HomePromiseComponent } from './component/home.component.promise';

const homeRoutes: Routes = [
  { path: 'home', component: HomePromiseComponent }
];

export const homeRouting = RouterModule.forChild(homeRoutes);