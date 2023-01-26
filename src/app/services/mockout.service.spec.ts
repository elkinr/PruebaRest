import { TestBed } from '@angular/core/testing';

import { MockoutService } from './mockout.service';

describe('MockoutService', () => {
  let service: MockoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
