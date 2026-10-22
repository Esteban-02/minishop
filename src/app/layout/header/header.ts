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

  cardCount = signal (0);

  //Texto que se muestra segun la cantidad de productos
  cartLabel = computed(() => {
    const cantidad = this.cardCount();
    return cantidad == 0 
      ? 'Carrito Vacio'
      : `${cantidad} productos`;
  });

  //agregar un producto 
  addTest(): void {
    this.cardCount.update(cantidad => cantidad + 1);
  }

  //limpiar carrito
  clear(): void {
    this.cardCount.set(0);
  }

}
