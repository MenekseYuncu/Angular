import { TestBed } from '@angular/core/testing';

import { CorporateCustomersServiceService } from './corporate-customers-service.service';

describe('CorporateCustomersServiceService', () => {
  let service: CorporateCustomersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporateCustomersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
