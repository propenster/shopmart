import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestselling } from './bestselling';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Bestselling', () => {
  let component: Bestselling;
  let fixture: ComponentFixture<Bestselling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bestselling],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bestselling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
