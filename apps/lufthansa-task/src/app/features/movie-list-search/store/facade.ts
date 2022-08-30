import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { MovieListSearchFeatureState } from './reducer';
import { setSearchCriteria } from './actions';
import { MovieListSearchFormData } from '../../shared/models/movie-list-search-form-data.model';
import { Observable } from 'rxjs';
import { selectMovieListSearchCriteria } from './selectors';

@Injectable()
export class MovieListSearchStoreFacade {
  public searchCriteria$: Observable<MovieListSearchFormData> = this.store.select(selectMovieListSearchCriteria);

  constructor(private store: Store<MovieListSearchFeatureState>) {
  }

  public setSearchCriteria(searchCriteria: MovieListSearchFormData): void {
    this.store.dispatch(setSearchCriteria({ searchCriteria }));
  }
}
