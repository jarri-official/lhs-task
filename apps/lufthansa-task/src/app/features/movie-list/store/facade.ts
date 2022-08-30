import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';

import { GenreType, Movie } from '@lufthansa-task/models';

import { loadMovieListAction, unsetMovieListAction } from './actions';
import { selectGenreList, selectMovieList } from './selector';
import { MovieListFeatureState } from './reducer';

@Injectable()
export class MovieListStoreFacade {
  public movieList$: Observable<Movie[]> = this.store.select(selectMovieList)
    .pipe(filter((movieList: Movie[]) => movieList.length > 0));

  public genreList$: Observable<GenreType[]> = this.store.select(selectGenreList)
    .pipe(filter((genreList: GenreType[]) => genreList.length > 0));

  constructor(private store: Store<MovieListFeatureState>) {
  }

  public loadMovieList(): void {
    this.store.dispatch(loadMovieListAction());
  }

  public unsetMovieList(): void {
    this.store.dispatch(unsetMovieListAction());
  }
}
