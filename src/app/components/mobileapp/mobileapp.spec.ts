import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobileapp } from './mobileapp';

describe('Mobileapp', () => {
  let component: Mobileapp;
  let fixture: ComponentFixture<Mobileapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mobileapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mobileapp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
