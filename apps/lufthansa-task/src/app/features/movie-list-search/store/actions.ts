import { createAction, props } from '@ngrx/store';

import { featureReducerKey } from './feature-reducer-key.constant';
import { MovieListSearchFormData } from '../../shared/models/movie-list-search-form-data.model';

export const setSearchCriteria = createAction(`[${featureReducerKey}] SET search criteria`, props<{searchCriteria: MovieListSearchFormData}>());
