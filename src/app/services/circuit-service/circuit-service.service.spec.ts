import { TestBed } from '@angular/core/testing';

import { CircuitServiceService } from './circuit-service.service';

describe('CircuitServiceService', () => {
  let service: CircuitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircuitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
