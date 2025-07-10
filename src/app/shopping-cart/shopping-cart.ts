import { Component } from '@angular/core';
import { CeramicPieceCart } from '../ceramic-piece-cart';
import { CeramicPiece } from '../ceramic-piece-list/CeramicPiece';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})
export class ShoppingCart {

  cartList$: Observable<CeramicPiece[]>;

  constructor(private cart: CeramicPieceCart) {
    this.cartList$ = cart.cartList.asObservable();
  }
}
