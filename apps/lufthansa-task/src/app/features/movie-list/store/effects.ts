import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import { GenreType, Movie } from '@lufthansa-task/models';

import { loadMovieListAction, setGenreListAction, setMovieListAction } from './actions';
import { MovieListDataService } from '../services/movie-list-data.service';

@Injectable()
export class MovieListStoreEffects {
  public loadMovieList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovieListAction),
      switchMap(() => this.movieListDataService.getMovieList()),
      map((list: Movie[]) => setMovieListAction({ list }))
    )
  );

  /**
   * Genres can be easily extracted form GenreType enum, but I decided to do this more interesting way. This if of
   * course not optimal but it is demonstration of how effects works in Angular application.
   */
  public generateGenresList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setMovieListAction),
      map(({ list }: { list: Movie[] }) => {
        return list.reduce((genres: GenreType[], movie: Movie) => {
          return genres.concat(movie.genres.filter(((genre: GenreType) => genres.indexOf(genre) < 0)));
        }, []);
      }),
      map((genres: GenreType[]) => setGenreListAction({genres}))
    )
  );

  constructor(private actions$: Actions,
              private movieListDataService: MovieListDataService) {
  }
}
