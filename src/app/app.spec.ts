import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(App);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, shopmart');
  // });

  it('should load all children components', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-topheader')).toBeTruthy();
    expect(compiled.querySelector('app-hero')).toBeTruthy();
    expect(compiled.querySelector('app-category')).toBeTruthy();
    expect(compiled.querySelector('app-newlyarrived')).toBeTruthy();
    expect(compiled.querySelector('app-trending')).toBeTruthy();
    expect(compiled.querySelector('app-ads')).toBeTruthy();
    expect(compiled.querySelector('app-bestselling')).toBeTruthy();
    expect(compiled.querySelector('app-mostpopular')).toBeTruthy();
    expect(compiled.querySelector('app-justarrived')).toBeTruthy();
    expect(compiled.querySelector('app-blog')).toBeTruthy();
    expect(compiled.querySelector('app-mobileapp')).toBeTruthy();
    expect(compiled.querySelector('app-alternatives')).toBeTruthy();
    expect(compiled.querySelector('app-incentives')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();

  });



});
