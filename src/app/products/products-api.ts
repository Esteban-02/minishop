import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductsResponse } from '../models/products-response';

@Injectable({
  providedIn: 'root',
})
export class ProductsApi {
  protected readonly http = inject(HttpClient);
  private URLBase = 'https://dummyjson.com/products';

  getAll(): Observable<Product[]>{
    return this.http.get<ProductsResponse>(this.URLBase).
    pipe(map(res => res.products));
  }



  
}
