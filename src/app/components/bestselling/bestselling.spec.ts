import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestselling } from './bestselling';
import { provideZonelessChangeDetection } from '@angular/core';
import { Product } from '../../models/product';
import { Api } from '../../services/api';
import { of } from 'rxjs';

describe('Bestselling', () => {
  let component: Bestselling;
  let fixture: ComponentFixture<Bestselling>;
  let apiService: Api;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bestselling],
      providers: [provideZonelessChangeDetection(), Api]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Bestselling);
    component = fixture.componentInstance;
    apiService = TestBed.inject(Api);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render Best selling products title tag', () => {
    const fixture = TestBed.createComponent(Bestselling);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h2');
    expect(titleElement?.textContent).toContain('Best selling products');

  });

  it('should render bestselling products', () => {
    const fixture = TestBed.createComponent(Bestselling);
    component.fetchProducts();
    fixture.detectChanges();
    expect(component.products.length).toBeGreaterThanOrEqual(1);
  });

  it('should fetch correct bestselling products', () => {
    const mockBestsellingProducts: Product[] = [
      { id: 1, title: 'Product 1', image: 'image1.jpg', qty: '1kg', rating: 4.5, price: 10, discount: 0 },
      { id: 2, title: 'Product 2', image: 'image2.jpg', qty: '500g', rating: 4.0, price: 5, discount: 10 },
    ];
    const fixture = TestBed.createComponent(Bestselling);
    spyOn(apiService, 'getBestSellers').and.returnValue(of(mockBestsellingProducts));
    fixture.detectChanges();
    expect(apiService.getBestSellers).toHaveBeenCalled();
    expect(component.products.length).toBe(mockBestsellingProducts.length);
    expect(component.products).toEqual(mockBestsellingProducts);
  });

});
