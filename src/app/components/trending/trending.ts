import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";
import { Api } from "../../services/api";


@Component({
  selector: 'app-trending',
  imports: [],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export class Trending implements OnInit {

  products: Product[] = [];
  veggies: Product[] = [];
  juices: Product[] = [];


  constructor(private apiService: Api) {

  }

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchVeggies();
    this.fetchJuices();
  }

  fetchProducts(): void {
    this.apiService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log(`Error while fetching products >>> ${err}`);
      }
    });
  }


  //we will homogenize the products later... make it be in one data source and use category to partition...
  fetchVeggies(): void {
    this.apiService.getVeggies().subscribe({
      next: (data) => {
        this.veggies = data;
      },
      error: (err) => {
        console.log(`Error while fetching veggies >>> ${err}`);
      }
    });

  }

  fetchJuices(): void {
    this.apiService.getJuices().subscribe({
      next: (data) => {
        this.juices = data;
      },
      error: (err) => {
        console.log(`Error while fetching juices >>> ${err}`);
      }
    });

  }


}
