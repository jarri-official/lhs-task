import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListModule } from '../../features/movie-list';

/**
 * Why this whole "page" concept? It makes better separation of code, and resposibility of pages are only to display
 * pages. Also feature components (used on this page) can be shared more easily between other pages or features. This is
 * quite abstract in this case but it provides better scalability of application overall.
 */
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
