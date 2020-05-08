import { TestBed } from '@angular/core/testing';

import { StatsDataResolverGuard } from './stats-data-resolver.guard';

describe('StatsDataResolverGuard', () => {
  let guard: StatsDataResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StatsDataResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
