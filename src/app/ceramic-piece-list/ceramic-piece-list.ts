import { Component } from '@angular/core';
import { CeramicPiece } from './CeramicPiece';
import { CeramicPieceCart } from '../ceramic-piece-cart';
import { CeramicData } from '../ceramic-data';

@Component({
  selector: 'app-ceramic-piece-list',
  standalone: false,
  templateUrl: './ceramic-piece-list.html',
  styleUrl: './ceramic-piece-list.scss',
})
export class CeramicPieceList {

  pieces: CeramicPiece[] = [];

  // Injecting the CeramicPieceCart and CeramicData services
  // to manage the cart and fetch ceramic pieces data
  constructor(
    private cart: CeramicPieceCart,
    private ceramicsData: CeramicData
  ) {}
  
  ngOnInit(): void{
    // Fetching all ceramic pieces from the CeramicData service
    this.ceramicsData.getAll().subscribe((pieces: CeramicPiece[]) => {
      this.pieces = pieces;
    });
  }

  addToCart(piece: CeramicPiece): void {
    this.cart.addToCart(piece);
    piece.stock -= piece.quantity;
    piece.quantity = 0;
  }
}
