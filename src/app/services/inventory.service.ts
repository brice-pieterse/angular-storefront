import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getInventory():Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/products.json')
  }

}
