import { Component } from '@angular/core';
import { CeramicPieceCart } from '../ceramic-piece-cart';
import { CeramicPiece } from '../ceramic-piece-list/CeramicPiece';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss',
})
export class ShoppingCart {
  cartList$: Observable<CeramicPiece[]>;
  total$: Observable<number>;

  constructor(private cart: CeramicPieceCart) {
    this.cartList$ = cart.cartList.asObservable();
    this.total$ = this.cartList$.pipe(
      map((items) =>
        items.reduce((acc, item) => acc + item.price * item.quantity, 0)
      )
    );
  }

  removeFromCart(piece: CeramicPiece) {
    const currentCart = this.cart.cartList.value; 
    const pieceInCart = currentCart.find((p) => p.id === piece.id);
  }
}
