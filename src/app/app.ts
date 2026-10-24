import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { ProductCard } from './products/product-card/product-card';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductCard,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('minishop');
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      title: 'Mouse inalámbrico',
      price: 45000,
      thumbnail: 'https://placehold.co/200x200?text=Mouse',
      category: 'Accesorios',
      rating: 4.5,
      stock: 2,
    },
    {
      id: 2,
      title: 'Teclado mecánico',
      price: 120000,
      thumbnail: 'https://placehold.co/200x200?text=Teclado',
      category: 'Accesorios',
      rating: 4.8,
      stock: 10,
    },
    {
      id: 3,
      title: 'Audífonos',
      price: 80000,
      thumbnail: 'https://placehold.co/200x200?text=Audifonos',
      category: 'Audio',
      rating: 4.2,
      stock: 4,
    },
  ]);

  onAddToCart(product: Product): void {
    console.log('Producto seleccionado:', product);
  }
}
