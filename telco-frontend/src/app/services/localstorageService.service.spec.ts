/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalstorageServiceService } from './localstorageService.service';

describe('Service: LocalstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstorageServiceService]
    });
  });

  it('should ...', inject([LocalstorageServiceService], (service: LocalstorageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
