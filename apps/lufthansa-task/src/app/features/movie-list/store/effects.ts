import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import { Movie } from '@lufthansa-task/models';

import { loadMovieListAction, setMovieListAction } from './actions';
import { MovieListDataService } from '../services/movie-list-data.service';

@Injectable()
export class MovieListStoreEffects {
  public loadMovieList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovieListAction),
      switchMap(() => this.movieListDataService.getMovieList()),
      map((list: Movie[]) => setMovieListAction({list}))
    )
  );

  constructor(private actions$: Actions,
              private movieListDataService: MovieListDataService) {
  }
}
