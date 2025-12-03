import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [
    CommonModule,
  ],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  categories = [
    { name: 'Petit-Déjeuner', icon: '🥣' },
    { name: 'Déjeuner', icon: '🍔' },
    { name: 'Dinner', icon: '🍱' },
    { name: 'Ftour-Ramadan', icon: '☪️' },
    { name: 'Acha-Ramadan', icon: '🕌' },
    { name: 'Macaron', icon: '🪖' },
  ];
}
