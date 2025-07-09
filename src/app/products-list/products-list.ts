import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss'
})
export class ProductsList {
  product = {
    "name": "Cafetino",
    "line": "Rose",
    "price": 25000,
    "stock": 5,
    "image" : "../assets/images/cafetino_rose.jpg"
  }
  constructor(){}
}
