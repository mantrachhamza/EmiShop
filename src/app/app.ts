import { Component, signal } from '@angular/core';
import {Header} from './components/header/header';
import {Categories} from './components/categories/categories';
import {Footer} from './components/footer/footer';
import {Auth} from './components/auth/auth';
import {Panier} from './components/panier/panier';
import {ListeProducts} from './components/liste-products/liste-products';

@Component({
  selector: 'app-root',
  imports: [Header, Categories, Footer,
    Auth, Panier,
    ListeProducts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmiShop');
}
