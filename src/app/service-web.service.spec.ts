import { TestBed } from '@angular/core/testing';

import { ServiceWebService } from './service-web.service';

describe('ServiceWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceWebService = TestBed.get(ServiceWebService);
    expect(service).toBeTruthy();
  });
});
