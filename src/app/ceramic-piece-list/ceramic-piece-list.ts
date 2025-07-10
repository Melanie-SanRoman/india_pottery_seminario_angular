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
      clearance: false,
      description: 'Descripcion...',
      quantity: 0,
    },
    {
      name: 'Jarra',
      line: 'Rose',
      price: 25000,
      stock: 0,
      image: '../assets/images/jarra.jpg',
      clearance: false,
      description: 'Descripcion...',
      quantity: 0,
    },
    {
      name: 'Cuenco',
      line: 'Love',
      price: 17000,
      stock: 10,
      image: '../assets/images/cuenco.jpg',
      clearance: true,
      description: 'Descripcion...',
      quantity: 0,
    },
    {
      name: 'Budinera',
      line: 'Gaspeada',
      price: 22000,
      stock: 2,
      image: '../assets/images/budinera.jpg',
      clearance: false,
      description: 'Descripcion...',
      quantity: 0,
    },
  ];
  constructor() {}

  upQuantity(piece: CeramicPiece): void {
    if (piece.stock > 0) {
      piece.quantity++;
      piece.stock--;
    }
  }

  downQuantity(piece: CeramicPiece): void {
    if (piece.quantity > 0) {
      piece.quantity--;
      piece.stock++;
    }
  }

  changeQuantity($event: Event, piece: CeramicPiece) {
    const input = $event.target as HTMLInputElement;
    const value = parseInt(input.value);
    const maxQuantity = piece.quantity + piece.stock;
    if (!isNaN(value) && value >= 0 && value <= maxQuantity) {
      piece.stock = maxQuantity - value;
      piece.quantity = value;
    } else {
      // Si el valor no es válido, restaurar el valor anterior
      input.value = piece.quantity.toString();
    }
  }
}
