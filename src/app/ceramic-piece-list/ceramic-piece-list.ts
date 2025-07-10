import { Component } from '@angular/core';
import { CeramicPiece } from './CeramicPiece';
import { CeramicPieceCart } from '../ceramic-piece-cart';

@Component({
  selector: 'app-ceramic-piece-list',
  standalone: false,
  templateUrl: './ceramic-piece-list.html',
  styleUrl: './ceramic-piece-list.scss',
})
export class CeramicPieceList {

  constructor(private cart: CeramicPieceCart) {}

  pieces: CeramicPiece[] = [
    {
      name: 'Cafetino',
      line: 'Rose',
      price: 12000,
      stock: 5,
      image: '../assets/images/cafetino_rose.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Jarra',
      line: 'Rose',
      price: 25000,
      stock: 0,
      image: '../assets/images/jarra.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Cuenco',
      line: 'Love',
      price: 17000,
      stock: 10,
      image: '../assets/images/cuenco.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Budinera',
      line: 'Gaspeada',
      price: 22000,
      stock: 2,
      image: '../assets/images/budinera.jpg',
      clearance: false,
      quantity: 0,
    },
  ];

  addToCart(piece: CeramicPiece): void {
    this.cart.addToCart(piece);
    piece.stock -= piece.quantity;
    piece.quantity = 0;
  }
}
