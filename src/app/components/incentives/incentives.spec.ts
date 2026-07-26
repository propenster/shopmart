import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incentives } from './incentives';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Incentives', () => {
  let component: Incentives;
  let fixture: ComponentFixture<Incentives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Incentives],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Incentives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
