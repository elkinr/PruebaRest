import { TestBed } from '@angular/core/testing';

import { ServiceTestService } from './service-test.service';

describe('ServiceTestService', () => {
  let service: ServiceTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('#get value should be', ()=>{
    const fake = {getValue: () => 'real value'};
    expect(fake).toBeTruthy();
  })
});
