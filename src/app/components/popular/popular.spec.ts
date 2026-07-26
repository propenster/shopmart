import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popular } from './popular';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Popular', () => {
  let component: Popular;
  let fixture: ComponentFixture<Popular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Popular],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Popular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Popular products title', () => {
    const fixture = TestBed.createComponent(Popular);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Most popular products');
  }

);



});
