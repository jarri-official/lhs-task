import { TestBed } from '@angular/core/testing';

import { MovieListDataService } from './movie-list-data.service';

describe('MovieListDataService', () => {
  let service: MovieListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
