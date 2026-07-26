import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alternatives } from './alternatives';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Alternatives', () => {
  let component: Alternatives;
  let fixture: ComponentFixture<Alternatives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alternatives],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alternatives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
