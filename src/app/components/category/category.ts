import { Component, OnInit } from '@angular/core';
import { Api } from "../../services/api";
import {ProductCategory} from "../../models/product-category";

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit {


  categories: ProductCategory[] = [];

  constructor(private apiService: Api) {

  }

  ngOnInit(): void {
    this.fetchProductCategories();
  }

  fetchProductCategories(): void {

    this.apiService.getProductCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error(`Error fetching product categories >>> ${err}`);
      }
    })

  }








}
