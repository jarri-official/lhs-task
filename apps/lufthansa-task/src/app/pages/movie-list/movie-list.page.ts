import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from '@movie/features/movie-list';

@Component({
  selector: 'lufthansa-task-movie-list-page',
  standalone: true,
  imports: [
    CommonModule,
    MovieListComponent
  ],
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListPage {
}
