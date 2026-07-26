import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs"
import { PRODUCTS, VEGGIES, JUICES, BEST_SELLERS, Product } from "../models/product";
import { PRODUCT_CATEGORIES, ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root',
})
export class Api {







  getProductCategories(): Observable<ProductCategory[]> {
    return of(PRODUCT_CATEGORIES);
  }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }
  getVeggies(): Observable<Product[]> {
    return of(VEGGIES);
  }

  getJuices(): Observable<Product[]> {
    return of(JUICES);
  }

  getBestSellers(): Observable<Product[]> {
    return of(BEST_SELLERS);
  }





}
