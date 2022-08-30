import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie } from '@lufthansa-task/models';

@Component({
  selector: 'lufthansa-task-poster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosterComponent {
  @Input() public movieDetails: Movie | null = null;
}
