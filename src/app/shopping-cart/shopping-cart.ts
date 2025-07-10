import { Component } from '@angular/core';
import { CeramicPieceCart } from '../ceramic-piece-cart';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})
export class ShoppingCart {

  constructor(private cart: CeramicPieceCart) {}
}
