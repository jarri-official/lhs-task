import { createReducer, on } from '@ngrx/store';

import { setSearchCriteria } from './actions';
import { MovieListSearchFormData } from '../../shared/models/movie-list-search-form-data.model';

export interface MovieListSearchFeatureState {
  searchCriteria: MovieListSearchFormData
}

const initialState: MovieListSearchFeatureState = {
  searchCriteria: {
    name: '',
    genres: {}
  }
}

export const reducer = createReducer(
  initialState,

  on(setSearchCriteria, (state: MovieListSearchFeatureState, {searchCriteria}: {searchCriteria: MovieListSearchFormData}) => ({
    ...state,
    searchCriteria
  }))
)
