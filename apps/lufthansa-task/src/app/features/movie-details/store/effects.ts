import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs';

import { Movie } from '@lufthansa-task/models';

import { loadMovieDetailsAction, setMovieDetailsAction } from './actions';
import { MovieDetailsDataService } from '../services/movie-details-data.service';
import { urls } from '../../../shared/constants/urls.constant';

@Injectable()
export class MovieDetailsStoreEffects {
  public loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovieDetailsAction),
      switchMap(({ key }: { key: string }) => this.movieDetailsDataService.getMovieDetails(key)),
      tap((movie: Movie | null) => {
        if (!movie) {
          this.router.navigate([urls.notFound], { skipLocationChange: true });
        }
      }),
      filter(Boolean),
      map((movie: Movie) => setMovieDetailsAction({ movie }))
    )
  );

  constructor(private actions$: Actions,
              private movieDetailsDataService: MovieDetailsDataService,
              private router: Router) {
  }
}
