import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiaPotteryPieces } from './india-pottery-pieces/india-pottery-pieces';
import { IndiaPotteryAbout } from './india-pottery-about/india-pottery-about';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pieces',
    pathMatch: 'full'
  },
  {
    path: 'pieces',
    component: IndiaPotteryPieces
  },
  {
    path: 'about',
    component: IndiaPotteryAbout
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
