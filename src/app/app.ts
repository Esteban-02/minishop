import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { ProductCard } from './products/product-card/product-card';
import { Product } from './models/product';
import { CartStore } from './cart/cart-store';
import { ProductsApi } from './products/products-api';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductCard,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly cart = inject(CartStore);
  private readonly api = inject(ProductsApi)
  protected readonly title = signal('minishop');

  protected readonly total = this.cart.total;

  protected onAddToCart(product: Product): void {
    this.cart.add(product);
    console.log('Producto seleccionado:', product);
  }

  protected readonly products = toSignal(this.api.getAll(), {
      initialValue: []
  });
}
