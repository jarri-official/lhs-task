import { TestBed } from '@angular/core/testing';

import { MovieDetailsDataService } from './movie-details-data.service';

describe('MovieDetailsDataService', () => {
  let service: MovieDetailsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDetailsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
