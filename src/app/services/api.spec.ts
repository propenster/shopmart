import { TestBed } from '@angular/core/testing';

import { Api } from './api';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Api', () => {
  let service: Api;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideZonelessChangeDetection()]});
    service = TestBed.inject(Api);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
