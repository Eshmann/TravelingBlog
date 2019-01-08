import { TestBed } from '@angular/core/testing';

import { TripserviceService } from './tripservice.service';

describe('TripserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripserviceService = TestBed.get(TripserviceService);
    expect(service).toBeTruthy();
  });
});
