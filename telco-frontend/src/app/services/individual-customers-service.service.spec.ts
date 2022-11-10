import { TestBed } from '@angular/core/testing';

import { IndividualCustomersService } from './individual-customers-service.service';

describe('IndividualCustomersServiceService', () => {
  let service: IndividualCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
