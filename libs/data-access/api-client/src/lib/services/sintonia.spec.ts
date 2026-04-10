import { TestBed } from '@angular/core/testing';

import { SintoniaApiService } from './sintonia';

describe('Sintonia', () => {
  let service: SintoniaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SintoniaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
