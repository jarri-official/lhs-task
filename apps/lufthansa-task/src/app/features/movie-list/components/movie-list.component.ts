import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GenreType, Movie } from '@lufthansa-task/models';

import { MovieListStoreFacade } from '../store/facade';
import { MovieListSearchFacade } from '../../movie-list-search/movie-list-search.facade';
import { MovieListSearchFormData } from '../../shared/models/movie-list-search-form-data.model';

@Component({
  selector: 'lufthansa-task-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit, OnDestroy {
  public movieList$: Observable<Movie[]> = this.movieListStoreFacade.movieList$;
  public genreList$: Observable<GenreType[]> = this.movieListStoreFacade.genreList$;
  public searchCriteria$: Observable<MovieListSearchFormData> = this.movieListSearchFacade.searchCriteria$;

  constructor(private movieListStoreFacade: MovieListStoreFacade,
              private movieListSearchFacade: MovieListSearchFacade) {
  }

  public ngOnInit(): void {
    this.movieListStoreFacade.loadMovieList();
  }

  public ngOnDestroy(): void {
    this.movieListStoreFacade.unsetMovieList();
  }
}
