import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trending } from './trending';
import { provideZonelessChangeDetection } from '@angular/core';
import { Api } from '../../services/api';
import { of } from 'rxjs';
import { Product } from '../../models/product';

describe('Trending', () => {
  let component: Trending;
  let fixture: ComponentFixture<Trending>;
  let apiService: Api;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trending],
      providers: [provideZonelessChangeDetection(), Api]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Trending);
    component = fixture.componentInstance;
    apiService = TestBed.inject(Api);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Trending products title', () => {
    const fixture = TestBed.createComponent(Trending);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Trending Products');
  });

  it('should render Trending products', () => {
    const fixture = TestBed.createComponent(Trending);
    component.fetchProducts();
    fixture.detectChanges();
    expect(component.products.length).toBeGreaterThanOrEqual(1);
    const mockTrendingProducts: Product[] = [
      {
        id: 0,
        title: 'Sunstar Fresh Melon Juice',
        image: 'images/thumb-cucumber.png',
        qty: '1 Unit',
        rating: 4.5,
        price: 18.00,
        discount: 30,
      },
      {
        id: 1,
        title: 'Sunstar Fresh Melon Juice',
        image: 'images/thumb-milk.png',
        qty: '1 Unit',
        rating: 4.5,
        price: 18.00,
        discount: 30,
      }
    ];
    spyOn(apiService, 'getProducts').and.returnValue(of(mockTrendingProducts));



  });

  it('should fetch correct trending products', () => {
    const fixture = TestBed.createComponent(Trending);
    const mockTrendingProducts: Product[] = [
      {
        id: 0,
        title: 'Sunstar Fresh Melon Juice',
        image: 'images/thumb-cucumber.png',
        qty: '1 Unit',
        rating: 4.5,
        price: 18.00,
        discount: 30,
      },
      {
        id: 1,
        title: 'Sunstar Fresh Melon Juice',
        image: 'images/thumb-milk.png',
        qty: '1 Unit',
        rating: 4.5,
        price: 18.00,
        discount: 30,
      }
    ];


    spyOn(apiService, 'getProducts').and.returnValue(of(mockTrendingProducts));

    fixture.detectChanges();
    expect(apiService.getProducts).toHaveBeenCalled();
    expect(component.products.length).toBe(mockTrendingProducts.length);
    expect(component.products).toEqual(mockTrendingProducts);

  });

  

});
