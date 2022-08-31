import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from '@lufthansa-task/models';

/**
 * Dumb component for displaying movie preview only
 */
@Component({
  selector: 'lufthansa-task-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListItemComponent {
  @Input() public movieDetails: Movie | null = null;
}
