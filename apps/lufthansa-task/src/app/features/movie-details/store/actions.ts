import { createAction } from '@ngrx/store';

import { featureReducerKey } from './feature-reducer-key.constant';

export const loadMovieDetailsAction = createAction(`[${featureReducerKey}] LOAD movie details`);

export const setMovieDetailsAction = createAction(`[${featureReducerKey}] SET movie details`);

export const unsetMovieDetailsAction = createAction(`[${featureReducerKey}] UNSET movie details`);
