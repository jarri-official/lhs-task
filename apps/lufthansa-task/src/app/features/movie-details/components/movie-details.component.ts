import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Movie } from '@lufthansa-task/models';

import { MovieDetailsStoreFacade } from '../store/facade';
import { movieDetailsRouterParamKey } from '../constants/movie-details-router-param-key.constant';

@Component({
  selector: 'lufthansa-task-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  public movieDetails$: Observable<Movie> = this.movieDetailsStoreFacade.movieDetails$;

  constructor(private movieDetailsStoreFacade: MovieDetailsStoreFacade,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.movieDetailsStoreFacade.loadMovieDetails(this.activatedRoute.snapshot.params[movieDetailsRouterParamKey]);
  }

  public ngOnDestroy(): void {
    this.movieDetailsStoreFacade.unsetMovieDetails();
  }
}
