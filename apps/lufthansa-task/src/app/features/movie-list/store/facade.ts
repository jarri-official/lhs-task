import { MovieListFeatureState } from './reducer';
import { Store } from '@ngrx/store';
import { loadMovieListAction, unsetMovieListAction } from './actions';
import { filter, Observable } from 'rxjs';
import { Movie } from '@lufthansa-task/models';
import { selectMovieList } from './selector';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieListStoreFacade {
  public movieList$: Observable<Movie[]> = this.store.select(selectMovieList)
    .pipe(filter((movieList: Movie[]) => movieList.length > 0));

  constructor(private store: Store<MovieListFeatureState>) {
  }

  public loadMovieList(): void {
    this.store.dispatch(loadMovieListAction());
  }

  public unsetMovieList(): void {
    this.store.dispatch(unsetMovieListAction());
  }
}
