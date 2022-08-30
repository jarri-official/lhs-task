import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListModule } from '../../features/movie-list';

@Component({
  selector: 'lufthansa-task-movie-list-page',
  standalone: true,
  imports: [
    CommonModule,
    MovieListModule
  ],
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListPage {
}
