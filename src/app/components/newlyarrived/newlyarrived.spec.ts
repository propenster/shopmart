import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newlyarrived } from './newlyarrived';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Newlyarrived', () => {
  let component: Newlyarrived;
  let fixture: ComponentFixture<Newlyarrived>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newlyarrived],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newlyarrived);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
