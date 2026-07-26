import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestselling } from './bestselling';

describe('Bestselling', () => {
  let component: Bestselling;
  let fixture: ComponentFixture<Bestselling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bestselling]
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
