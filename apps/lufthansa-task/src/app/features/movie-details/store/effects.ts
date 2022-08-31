import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs';

import { Movie } from '@lufthansa-task/models';

import { loadMovieDetailsAction, setMovieDetailsAction } from './actions';
import { MovieDetailsDataService } from '../services/movie-details-data.service';
import { TitleService } from '../../../services/title.service';
import { urls } from '../../../shared/constants/urls.constant';
import { MovieDetailsStoreFacade } from './facade';

@Injectable()
export class MovieDetailsStoreEffects {
  public loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovieDetailsAction),
      withLatestFrom(this.movieDetailsStoreFacade.routeParamsKey$),
      switchMap(([, key]: [unknown, string]) => this.movieDetailsDataService.getMovieDetails(key)),
      /**
       * Here is example of side-effect in effects. When no movie is provided (invalid key) then user will be redirected
       * to not found page, but without url change.
       */
      tap((movie: Movie | null) => {
        if (!movie) {
          this.router.navigate([urls.notFound], { skipLocationChange: true });
        }
      }),
      filter(Boolean),
      tap((movie: Movie) => this.titleService.setTitle(movie.name)),
      map((movie: Movie) => setMovieDetailsAction({ movie }))
    )
  );

  constructor(private actions$: Actions,
              private movieDetailsDataService: MovieDetailsDataService,
              private router: Router,
              private titleService: TitleService,
              private movieDetailsStoreFacade: MovieDetailsStoreFacade) {
  }
}
