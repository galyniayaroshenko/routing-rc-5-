export const authProviders = [];

import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './component/home.component';
import { RootPopupPromiseComponent } from './component/root-popup.component';

const popupRoutes: Routes = [
  { path: 'popup', component: RootPopupPromiseComponent }
];

export const popupRouting = RouterModule.forChild(popupRoutes);