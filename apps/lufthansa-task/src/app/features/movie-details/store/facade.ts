import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { MovieDetailsFeatureState } from './reducer';
import { loadMovieDetailsAction } from './actions';

@Injectable()
export class MovieDetailsStoreFacade {
  constructor(private store: Store<MovieDetailsFeatureState>) {
  }

  public loadMovieDetails(): void {
    this.store.dispatch(loadMovieDetailsAction());
  }
}
