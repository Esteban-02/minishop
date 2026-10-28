import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { ProductCard } from './products/product-card/product-card';
import { Product } from './models/product';
import { CartStore } from './cart/cart-store';
import { httpResource } from '@angular/common/http';
import { ProductsResponse } from './models/products-response';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductCard,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly cart = inject(CartStore);
  protected readonly title = signal('minishop');

  protected readonly search = signal('');

  private readonly productosUrl = computed(
    () => this.search()
    ? `https://dummyjson.com/products/search?q=${this.search()}`
    : `https://dummyjson.com/products`
  );

  protected readonly productRes = httpResource<ProductsResponse>(
    () => this.productosUrl()
  );

  protected onAddToCart(product: Product): void {
    this.cart.add(product);
  }

  protected readonly products = computed(() => 
    this.productRes.hasValue() 
    ? this.productRes.value().products 
    : []
  );

}
