import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';

const routes: Routes = [
  // path: a string that matches the URL in the browser address bar.
  // component: the component that the router should create when navigating to this route.
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}