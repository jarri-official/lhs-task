import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '@lufthansa-task/models';

import { MovieListStoreFacade } from '../store/facade';

@Component({
  selector: 'lufthansa-task-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit, OnDestroy {
  public movieList$: Observable<Movie[]> = this.movieListStoreFacade.movieList$;

  constructor(private movieListStoreFacade: MovieListStoreFacade) {
  }

  public ngOnInit(): void {
    this.movieListStoreFacade.loadMovieList();
  }

  public ngOnDestroy(): void {
    this.movieListStoreFacade.unsetMovieList();
  }
}
