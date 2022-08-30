import { createFeatureSelector, createSelector } from '@ngrx/store';

import { featureReducerKey } from './feature-reducer-key.constant';
import { MovieListFeatureState } from './reducer';

const selectFeature = createFeatureSelector<MovieListFeatureState>(featureReducerKey);

export const selectMovieList = createSelector(
  selectFeature,
  (state: MovieListFeatureState) => state.list
);

export const selectGenreList = createSelector(
  selectFeature,
  (state: MovieListFeatureState) => state.genres
);
