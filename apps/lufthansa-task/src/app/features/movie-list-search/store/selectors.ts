import { createFeatureSelector, createSelector } from '@ngrx/store';

import { featureReducerKey } from './feature-reducer-key.constant';
import { MovieListSearchFeatureState } from './reducer';

const selectFeature = createFeatureSelector<MovieListSearchFeatureState>(featureReducerKey);

export const selectMovieListSearchCriteria = createSelector(
  selectFeature,
  (state: MovieListSearchFeatureState) => state.searchCriteria
);
