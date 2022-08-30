import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectMovieListSearchCriteria } from './store/selectors';
import { MovieListSearchFeatureState } from './store/reducer';
import { MovieListSearchFormData } from '../shared/models/movie-list-search-form-data.model';

@Injectable({
  providedIn: 'root'
})
export class MovieListSearchFacade {
  public searchCriteria$: Observable<MovieListSearchFormData> = this.store.select(selectMovieListSearchCriteria);

  constructor(private store: Store<MovieListSearchFeatureState>) {
  }
}
