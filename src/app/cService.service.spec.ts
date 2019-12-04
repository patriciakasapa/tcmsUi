import { TestBed } from '@angular/core/testing';

import { cServiceService } from './cService.service';

describe('CServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: cServiceService = TestBed.get(cServiceService);
    expect(service).toBeTruthy();
  });
});
