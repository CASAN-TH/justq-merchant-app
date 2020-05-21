import { TestBed, async, inject } from '@angular/core/testing';

import { ShopGuard } from './shop.guard';

describe('ShopGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopGuard]
    });
  });

  it('should ...', inject([ShopGuard], (guard: ShopGuard) => {
    expect(guard).toBeTruthy();
  }));
});
