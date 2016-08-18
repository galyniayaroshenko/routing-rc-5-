import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroListComponent }    from './component/hero-list.component';
import { HeroDetailComponent }  from './component/hero-detail.component';

import { HeroService } from './service/hero.service';

import { heroesRouting } from './heroes.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    heroesRouting
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule {}


