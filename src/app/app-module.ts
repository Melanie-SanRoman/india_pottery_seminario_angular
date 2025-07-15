import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CeramicPieceList } from './ceramic-piece-list/ceramic-piece-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndiaPotteryAbout } from './india-pottery-about/india-pottery-about';
import { IndiaPotteryPieces } from './india-pottery-pieces/india-pottery-pieces';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { InputInteger } from './input-integer/input-integer';
import { HttpClientModule } from '@angular/common/http';
import { IndiaPotteryContact } from './india-pottery-contact/india-pottery-contact';

@NgModule({
  declarations: [
    App,
    CeramicPieceList,
    IndiaPotteryAbout,
    IndiaPotteryPieces,
    ShoppingCart,
    InputInteger,
    IndiaPotteryContact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
