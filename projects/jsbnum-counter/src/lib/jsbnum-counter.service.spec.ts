import { TestBed } from '@angular/core/testing';

import { JSBNumCounterService } from './jsbnum-counter.service';

describe('JSBNumCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JSBNumCounterService = TestBed.get(JSBNumCounterService);
    expect(service).toBeTruthy();
  });
});
