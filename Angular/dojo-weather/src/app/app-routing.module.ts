import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [],
    component: SeattleComponent,
  },
  {
    path: 'seattle',
    pathMatch: 'full',
    children: [],
    component: SeattleComponent,
  },
  {
    path: 'sanjose',
    pathMatch: 'full',
    children: [],
    component: SanjoseComponent,
  },
  {
    path: 'burbank',
    pathMatch: 'full',
    children: [],
    component: BurbankComponent,
  },
  {
    path: 'dallas',
    pathMatch: 'full',
    children: [],
    component: DallasComponent,
  },
  {
    path: 'dc',
    pathMatch: 'full',
    children: [],
    component: DcComponent,
  },
  {
    path: 'chicago',
    pathMatch: 'full',
    children: [],
    component: ChicagoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
