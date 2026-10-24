import { Component, input, computed, output } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  readonly product = input.required<Product>();

  protected readonly lowStock = computed(() => this.product().stock < 5);

  readonly addToCart  = output<Product>();
  

}
