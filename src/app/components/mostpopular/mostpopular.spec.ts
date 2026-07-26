import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mostpopular } from './mostpopular';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Mostpopular', () => {
  let component: Mostpopular;
  let fixture: ComponentFixture<Mostpopular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mostpopular],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mostpopular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
