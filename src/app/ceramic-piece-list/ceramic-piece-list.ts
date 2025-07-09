import { Component } from '@angular/core';
import { CeramicPiece } from './CeramicPiece';

@Component({
  selector: 'app-ceramic-piece-list',
  standalone: false,
  templateUrl: './ceramic-piece-list.html',
  styleUrl: './ceramic-piece-list.scss',
})
export class CeramicPieceList {
  pieces: CeramicPiece[] = [
    {
      name: 'Cafetino',
      line: 'Rose',
      price: 12000,
      stock: 5,
      image: '../assets/images/cafetino_rose.jpg',
      clearence: false
    },
    {
      name: 'Jarra',
      line: 'Rose',
      price: 25000,
      stock: 0,
      image: '../assets/images/jarra_rose.jpg',
      clearence: false
    },
    {
      name: 'Cuenco',
      line: 'Love',
      price: 17000,
      stock: 10,
      image: '../assets/images/jarra_rose.jpg',
      clearence: true
    },
    {
      name: 'Budinera',
      line: 'Gaspeada',
      price: 22000,
      stock: 2,
      image: '../assets/images/jarra_rose.jpg',
      clearence: false
    },
  ];
  constructor() {}
}
