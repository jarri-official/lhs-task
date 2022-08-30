import { TestBed } from '@angular/core/testing';

import { ApiMoviesDataService } from './api-movies-data.service';

describe('ApiMoviesDataService', () => {
  let service: ApiMoviesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMoviesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
