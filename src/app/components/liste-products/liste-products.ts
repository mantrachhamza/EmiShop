import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-liste-products',
  imports: [
    CommonModule,
  ],
  templateUrl: './liste-products.html',
  styleUrl: './liste-products.css',
})
export class ListeProducts {
  products = [
    { name: 'Laptop HP', price: 8500, img: 'https://via.placeholder.com/300' },
    { name: 'Casque JBL', price: 400, img: 'https://via.placeholder.com/300' },
    { name: 'Smartphone Samsung', price: 6200, img: 'https://via.placeholder.com/300' },
    { name: 'Gaming Mouse', price: 250, img: 'https://via.placeholder.com/300' }
  ];
}
