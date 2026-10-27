import { Component, computed, inject, signal } from '@angular/core';
import { CartStore } from '../../cart/cart-store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CurrencyPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly cart = inject(CartStore);

  //Nombre de la tienda
  storeName = signal('MiniShop');

  protected readonly isEmpty = computed(() => this.cart.count() === 0);

  //Texto que se muestra segun la cantidad de productos
  cartLabel = computed(() => {
    const cantidad = this.cart.count();
    return cantidad === 0 
      ? 'Carrito Vacio'
      : cantidad === 1
        ? `1 producto`
        : `${cantidad} productos` ;
  });

  //limpiar carrito
  clear(): void {
    this.cart.clear();
  }

}
