import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lufthansa-task-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() public type: 'button' | 'submit' = 'button';
  @Output() public clicked: EventEmitter<Event> = new EventEmitter<Event>();

  public onClick(event: Event): void {
    this.clicked.emit(event)
  }
}
