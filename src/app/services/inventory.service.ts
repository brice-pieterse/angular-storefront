import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getInventory(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/products.json')
  }

  getProduct(id: number): Observable<Product | undefined >  {
    return this.http.get<Product[]>('../../assets/products.json').pipe(
      map((products): Product | undefined => {
        return products.find( product => product.id === id)
      })
    )
  }

}
