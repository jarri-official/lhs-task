import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '@lufthansa-task/models';

import { MovieDetailsStoreFacade } from '../store/facade';

@Component({
  selector: 'lufthansa-task-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  public movieDetails$: Observable<Movie> = this.movieDetailsStoreFacade.movieDetails$;

  constructor(private movieDetailsStoreFacade: MovieDetailsStoreFacade) {
  }

  public ngOnInit(): void {
    this.movieDetailsStoreFacade.loadMovieDetails();
  }

  public ngOnDestroy(): void {
    this.movieDetailsStoreFacade.unsetMovieDetails();
  }
}
