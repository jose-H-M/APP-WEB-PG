import { TestBed } from '@angular/core/testing';

import { ServicePostgresService } from './service-postgres.service';

describe('ServicePostgresService', () => {
  let service: ServicePostgresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePostgresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
