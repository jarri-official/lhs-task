import { createReducer, on } from '@ngrx/store';

import { Movie } from '@lufthansa-task/models';

import { setMovieDetailsAction, unsetMovieDetailsAction } from './actions';

export interface MovieDetailsFeatureState {
  movie: Movie | null;
}

const initialState: MovieDetailsFeatureState = {
  movie: null
};

export const reducer = createReducer(
  initialState,

  on(setMovieDetailsAction, (state: MovieDetailsFeatureState, {movie}: {movie: Movie}) => ({
    ...state,
    movie
  })),

  on(unsetMovieDetailsAction, (state: MovieDetailsFeatureState) => ({
    ...state,
    ...initialState
  }))
);
