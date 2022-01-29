import { TestBed } from '@angular/core/testing';

import { ProductDetailsGuard } from './product-details.guard';

describe('ProductDetailsGuard', () => {
  let guard: ProductDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
