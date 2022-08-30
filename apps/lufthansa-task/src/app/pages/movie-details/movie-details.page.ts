import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieDetailsModule } from '../../features/movie-details';

@Component({
  selector: 'lufthansa-task-movie-details-page',
  standalone: true,
  imports: [
    CommonModule,
    MovieDetailsModule,
    RouterModule
  ],
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsPage {
}
