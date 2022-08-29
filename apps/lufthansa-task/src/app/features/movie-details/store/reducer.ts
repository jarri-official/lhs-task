import { createReducer } from '@ngrx/store';

import { Movie } from '@movie/shared/models/movie.model';

export interface MovieDetailsFeatureState {
  movieDetails: Movie | null;
}

export const initialState: MovieDetailsFeatureState = {
  movieDetails: null
};

export const reducer = createReducer(
  initialState
);
