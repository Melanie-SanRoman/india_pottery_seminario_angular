import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CeramicPieceList } from './ceramic-piece-list/ceramic-piece-list';
import { FormsModule } from '@angular/forms';
import { IndiaPotteryAbout } from './india-pottery-about/india-pottery-about';
import { IndiaPotteryPieces } from './india-pottery-pieces/india-pottery-pieces';
import { ShoppingCart } from './shopping-cart/shopping-cart';

@NgModule({
  declarations: [
    App,
    CeramicPieceList,
    IndiaPotteryAbout,
    IndiaPotteryPieces,
    ShoppingCart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
