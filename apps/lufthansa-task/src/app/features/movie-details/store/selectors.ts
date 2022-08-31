import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getSelectors } from '@ngrx/router-store';

import { MovieDetailsFeatureState } from './reducer';
import { featureReducerKey } from './feature-reducer-key.constant';

const selectFeature = createFeatureSelector<MovieDetailsFeatureState>(featureReducerKey);

export const selectMovieDetails = createSelector(
  selectFeature,
  (state: MovieDetailsFeatureState) => state.movie
);

export const {selectRouteParams} = getSelectors();
