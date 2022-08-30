import { createAction, props } from '@ngrx/store';

import { Movie } from '@lufthansa-task/models';

import { featureReducerKey } from './feature-reducer-key.constant';

export const loadMovieListAction = createAction(`[${featureReducerKey}] LOAD movie list`);

export const setMovieListAction = createAction(`[${featureReducerKey}] SET movie list`, props<{list: Movie[]}>());

export const unsetMovieListAction = createAction(`[${featureReducerKey}] UNSET move list`);
