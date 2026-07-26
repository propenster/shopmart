import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Justarrived } from './justarrived';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Justarrived', () => {
  let component: Justarrived;
  let fixture: ComponentFixture<Justarrived>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Justarrived],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Justarrived);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
