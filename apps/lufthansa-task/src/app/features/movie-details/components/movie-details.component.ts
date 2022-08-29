import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MovieDetailsStoreFacade } from '@movie/features/movie-details/store/facade';

@Component({
  selector: 'lufthansa-task-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieDetailsStoreFacade: MovieDetailsStoreFacade) {
  }

  public ngOnInit(): void {
    this.movieDetailsStoreFacade.loadMovieDetails();
  }
}
