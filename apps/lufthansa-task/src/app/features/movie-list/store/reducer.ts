import { createReducer, on } from '@ngrx/store';

import { GenreType, Movie } from '@lufthansa-task/models';

import { setGenreListAction, setMovieListAction, unsetMovieListAction } from './actions';

export interface MovieListFeatureState {
  list: Movie[];
  genres: GenreType[]
}

const initialState: MovieListFeatureState = {
  list: [],
  genres: []
};

export const reducer = createReducer(
  initialState,

  on(setMovieListAction, (state: MovieListFeatureState, {list}: {list: Movie[]}) => ({
    ...state,
    list
  })),

  on(unsetMovieListAction, (state: MovieListFeatureState) => ({
    ...state,
    ...initialState
  })),

  on(setGenreListAction, (state: MovieListFeatureState, {genres}: {genres: GenreType[]}) => ({
    ...state,
    genres
  }))
);
