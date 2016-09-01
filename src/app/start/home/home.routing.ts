export const authProviders = [];

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home.component';
// import { LoggedInGuard }        from '../login/service/logged-in.guard';

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

export const homeRouting = RouterModule.forChild(homeRoutes);