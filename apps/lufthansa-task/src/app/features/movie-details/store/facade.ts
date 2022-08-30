import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';

import { Movie } from '@lufthansa-task/models';

import { MovieDetailsFeatureState } from './reducer';
import { loadMovieDetailsAction, unsetMovieDetailsAction } from './actions';
import { selectMovieDetails } from './selectors';

@Injectable()
export class MovieDetailsStoreFacade {
  public movieDetails$: Observable<Movie> = this.store.select(selectMovieDetails)
    .pipe(filter(Boolean));

  constructor(private store: Store<MovieDetailsFeatureState>) {
  }

  public loadMovieDetails(key: string): void {
    this.store.dispatch(loadMovieDetailsAction({ key }));
  }

  public unsetMovieDetails(): void {
    this.store.dispatch(unsetMovieDetailsAction());
  }
}
