import { Pipe, PipeTransform } from '@angular/core';

import { GenreType, Movie } from '@lufthansa-task/models';

import { MovieListSearchFormData } from '../../shared/models/movie-list-search-form-data.model';

@Pipe({
  name: 'movieListFilter'
})
export class MovieListFilterPipe implements PipeTransform {
  transform(movieList: Movie[], searchCriteria: MovieListSearchFormData | null): Movie[] {
    if (!searchCriteria) {
      return movieList;
    }

    const genres: GenreType[] = Object.keys(searchCriteria.genres).filter((key: string) => !!searchCriteria.genres[key]) as GenreType[];

    return movieList.filter((movie: Movie) => {
      return movie.name.toLowerCase().includes(searchCriteria.name ? searchCriteria.name.toLowerCase() : '')
        && (genres.length ? movie.genres.some((genre: GenreType) => genres.includes(genre)) : movie);
    });
  }

}
