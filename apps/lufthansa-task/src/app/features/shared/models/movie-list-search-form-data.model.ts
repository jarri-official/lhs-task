import { MovieListSearchFormDataGenre } from './movie-list-search-form-data-genre.model';

export interface MovieListSearchFormData {
  name: string;
  genres: MovieListSearchFormDataGenre;
}
