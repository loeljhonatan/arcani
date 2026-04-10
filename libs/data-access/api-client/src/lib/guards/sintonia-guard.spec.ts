import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sintoniaGuard } from './sintonia-guard';

describe('sintoniaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sintoniaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
