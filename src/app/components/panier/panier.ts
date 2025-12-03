import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-panier',
  imports: [
    CommonModule,
  ],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
  items = [
    { name: 'Laptop HP', qty: 1, price: 8500 },
    { name: 'Casque JBL', qty: 2, price: 400 }
  ];

  get total() {
    return this.items.reduce((s, x) => s + x.qty * x.price, 0);
  }
}
