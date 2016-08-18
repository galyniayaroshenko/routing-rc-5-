import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent }    from './component/hero-list.component';
import { HeroDetailComponent }  from './component/hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

export const heroesRouting = RouterModule.forChild(heroesRoutes);

