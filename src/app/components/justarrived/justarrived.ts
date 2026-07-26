import { Component, OnInit } from '@angular/core';
import {Api} from "../../services/api";
import {Product} from "../../models/product";


@Component({
  selector: 'app-justarrived',
  imports: [],
  templateUrl: './justarrived.html',
  styleUrl: './justarrived.css',
})
export class Justarrived {
products: Product[] = [];

  constructor(private apiService: Api) {

  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.apiService.getBestSellers().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log(`Error while fetching products >>> ${err}`);
      }
    });
  }



}
