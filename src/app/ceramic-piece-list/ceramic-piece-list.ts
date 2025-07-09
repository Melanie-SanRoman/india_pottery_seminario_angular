import { Component } from '@angular/core';

@Component({
  selector: 'app-ceramic-piece-list',
  standalone: false,
  templateUrl: './ceramic-piece-list.html',
  styleUrl: './ceramic-piece-list.scss'
})
export class CeramicPieceList {
  piece = {
    "name": "Cafetino",
    "line": "Rose",
    "price": 25000,
    "stock": 5,
    "image" : "../assets/images/cafetino_rose.jpg"
  }
  constructor(){}
}
