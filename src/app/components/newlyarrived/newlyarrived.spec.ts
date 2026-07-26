import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newlyarrived } from './newlyarrived';

describe('Newlyarrived', () => {
  let component: Newlyarrived;
  let fixture: ComponentFixture<Newlyarrived>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newlyarrived]
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
