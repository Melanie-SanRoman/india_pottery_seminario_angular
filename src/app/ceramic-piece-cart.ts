import { Injectable } from '@angular/core';
import { CeramicPiece } from './ceramic-piece-list/CeramicPiece';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CeramicPieceCart {

  private _cartList: CeramicPiece[] = [];
  cartList: BehaviorSubject<CeramicPiece[]> = new BehaviorSubject<CeramicPiece[]>([]);

  constructor() { }

  addToCart(piece: CeramicPiece) {
    const existingPiece = this._cartList.find((item) => item.name === piece.name);
    if (existingPiece) {
      existingPiece.quantity += piece.quantity;
    } else {
      this._cartList.push({...piece});
    }
    this.cartList.next(this._cartList);
  }
}
