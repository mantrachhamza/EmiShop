import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from "../../models/Products";

@Component({
  selector: 'app-liste-products',
  imports: [CommonModule],
  templateUrl: './liste-products.html',
  styleUrl: './liste-products.css',
})
export class ListeProducts {
  productList: Product[] = [
    {
      id: 1,
      title: "Petit-Déjeuner Cossa",
      description:
        "Un délicieux assortiment pour bien commencer la journée : céréales, lait et fruits frais.",
      category: "Petit-Déjeuner",
      price: 0.8,
      discountPercentage: 5.2,
      rating: 4.7,
      stock: 14,
      tags: ["petit-déjeuner", "healthy", "matin"],
      images: "assets/images/Ftour.jpg"
    },
    {
      id: 2,
      title: "Déjeuner Express",
      description:
        "Un burger savoureux accompagné de frites croustillantes, parfait pour un repas rapide et gourmand.",
      category: "Déjeuner",
      price: 1.4,
      discountPercentage: 8.5,
      rating: 4.6,
      stock: 22,
      tags: ["déjeuner", "burger", "fast-food"],
      images: "assets/images/ghda.jpg"
    },
    {
      id: 3,
      title: "Dinner Deluxe",
      description:
        "Un repas complet et équilibré comprenant du riz, du poulet grillé et des légumes sautés.",
      category: "Dinner",
      price: 1.4,
      discountPercentage: 6.3,
      rating: 4.8,
      stock: 10,
      tags: ["dinner", "repas complet"],
      images: "assets/images/acha.jpg"
    },
    {
      id: 4,
      title: "Ftour Ramadan Traditionnel",
      description:
        "Une sélection d’aliments traditionnels pour un ftour complet : dattes, soupe harira et crêpes marocaines.",
      category: "Ftour-Ramadan",
      price: 1.4,
      discountPercentage: 10.1,
      rating: 4.9,
      stock: 7,
      tags: ["ramadan", "ftour", "traditionnel"],
      images: "assets/images/ftour-ramadan.jpg"
    },
    {
      id: 5,
      title: "Acha Ramadan Énergétique",
      description:
        "Un repas léger mais énergétique pour tenir toute la journée : œufs, jus frais et pain complet.",
      category: "Shour-Ramadan",
      price: 1.4,
      discountPercentage: 4.9,
      rating: 4.75,
      stock: 12,
      tags: ["ramadan", "shour", "énergie"],
      images: "assets/images/acha-ramadan.jpg"
    },
    {
      id: 6,
      title: "Macaron Mix Box",
      description:
        "Une boîte variée de macarons artisanaux aux saveurs vanille, pistache, framboise et chocolat.",
      category: "Macaron",
      price: 199,
      discountPercentage: 3.2,
      rating: 4.85,
      stock: 30,
      tags: ["dessert", "macaron", "sucré"],
      images: "assets/images/macaron.jpg"
    }

  ];

}
