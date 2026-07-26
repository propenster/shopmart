import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { Api } from '../../services/api';

@Component({
  selector: 'app-popular',
  imports: [],
  templateUrl: './popular.html',
  styleUrl: './popular.css',
})
export class Popular {

  product: Product[] = [];

  constructor(private apiService: Api) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.apiService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.product = data;
      },
      error: (error) => {
        console.error(`Error fetching products: ${error}`);
      }
    });

  }


}
