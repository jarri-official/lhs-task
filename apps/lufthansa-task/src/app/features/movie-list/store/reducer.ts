import { createReducer, on } from '@ngrx/store';

import { Movie } from '@lufthansa-task/models';

import { setMovieListAction, unsetMovieListAction } from './actions';

export interface MovieListFeatureState {
  list: Movie[];
}

const initialState: MovieListFeatureState = {
  list: []
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
  }))
);
