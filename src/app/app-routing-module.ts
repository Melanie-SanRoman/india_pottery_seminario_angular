import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiaPotteryPieces } from './india-pottery-pieces/india-pottery-pieces';
import { IndiaPotteryAbout } from './india-pottery-about/india-pottery-about';
import { IndiaPotteryContact } from './india-pottery-contact/india-pottery-contact';
import { IndiaPotteryReviews } from './india-pottery-reviews/india-pottery-reviews';

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
  {
    path: 'contact',
    component: IndiaPotteryContact
  },
  {
    path: 'reviews',
    component: IndiaPotteryReviews
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
