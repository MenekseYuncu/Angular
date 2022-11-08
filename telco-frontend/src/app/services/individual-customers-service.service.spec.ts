import { TestBed } from '@angular/core/testing';

import { IndividualCustomersServiceService } from './individual-customers-service.service';

describe('IndividualCustomersServiceService', () => {
  let service: IndividualCustomersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualCustomersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
