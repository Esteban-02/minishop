import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  //Nombre de la tienda
  storeName = signal('MiniShop');

  cartCount = signal (0);
  protected readonly isEmpty = computed(() => this.cartCount() === 0);

  //Texto que se muestra segun la cantidad de productos
  cartLabel = computed(() => {
    const cantidad = this.cartCount();
    return cantidad === 0 
      ? 'Carrito Vacio'
      : cantidad === 1
        ? `1 producto`
        : `${cantidad} productos` ;
  });

  //agregar un producto 
  addTest(): void {
    this.cartCount.update(cantidad => cantidad + 1);
  }

  //limpiar carrito
  clear(): void {
    this.cartCount.set(0);
  }

}
