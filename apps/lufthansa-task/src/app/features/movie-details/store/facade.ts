import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';

import { Movie } from '@lufthansa-task/models';

import { MovieDetailsFeatureState } from './reducer';
import { loadMovieDetailsAction, unsetMovieDetailsAction } from './actions';
import { selectMovieDetails, selectRouteParams } from './selectors';
import { movieDetailsRouterParamKey } from '../constants/movie-details-router-param-key.constant';
import { Params } from '@angular/router';

@Injectable()
export class MovieDetailsStoreFacade {
  public movieDetails$: Observable<Movie> = this.store.select(selectMovieDetails)
    .pipe(filter(Boolean));

  public routeParamsKey$: Observable<string> = this.store.pipe(select(selectRouteParams))
    .pipe(map((routeParams: Params) => routeParams[movieDetailsRouterParamKey]));

  constructor(private store: Store<MovieDetailsFeatureState>) {
  }

  public loadMovieDetails(): void {
    this.store.dispatch(loadMovieDetailsAction());
  }

  public unsetMovieDetails(): void {
    this.store.dispatch(unsetMovieDetailsAction());
  }
}
