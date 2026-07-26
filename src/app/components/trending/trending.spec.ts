import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trending } from './trending';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Trending', () => {
  let component: Trending;
  let fixture: ComponentFixture<Trending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trending],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trending);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Trending products title', () => {
    const fixture = TestBed.createComponent(Trending);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Trending Products');
  })
});
