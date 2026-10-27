import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})

export class CartStore {

  //Estado privado del carrito => solo lo leera el servicio
  private readonly _items = signal<CartItem[]>([]);

  //Version publica del estado del carrito de solo lectura
  readonly items = this._items.asReadonly();

  //Sumar las cantidades de todos los productos

  readonly count = computed(() => 
    this._items().reduce((total, item) => total + item.quantity, 0)
  );

  //Calcular el valor total del carrito

  readonly total = computed(() => 
    this._items()
      .reduce((total, item) =>
        total + item.quantity * item.product.price, 0
      )
  );

  add(product: Product): void{
    this._items.update(items => {
      const existingItem = items.find(
        item => item.product.id === product.id
      );
      if(existingItem){
        return items.map(item => 
          item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
        );
      }
      return [ ...items, {product, quantity: 1}];
    });
  }


  //Eliminar un producto de carrito por su id

  remove(productId: number):void {
    this._items.update( items => 
      items.filter(item => item.product.id !== productId )
    );
  }

  //vaciar el carrito de compra
  clear (): void {
    this._items.set([]);
  } 

}
