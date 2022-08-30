import { TestBed } from '@angular/core/testing';

import { MovieListSearchFacade } from './movie-list-search.facade';

describe('MovieListSearchFacade', () => {
  let service: MovieListSearchFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieListSearchFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
