import { createAction, props } from '@ngrx/store';

import { Movie } from '@lufthansa-task/models';

import { featureReducerKey } from './feature-reducer-key.constant';

export const loadMovieDetailsAction = createAction(`[${featureReducerKey}] LOAD movie details`, props<{ key: string }>());

export const setMovieDetailsAction = createAction(`[${featureReducerKey}] SET movie details`, props<{movie: Movie}>());

export const unsetMovieDetailsAction = createAction(`[${featureReducerKey}] UNSET movie details`);
