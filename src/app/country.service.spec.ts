import { TestBed } from '@angular/core/testing';

import { countryService } from './country.service';

describe('ApiService', () => {
  let service: countryService;

  beforeAll(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(countryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});