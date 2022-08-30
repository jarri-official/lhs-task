import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[lufthansaTaskInput]'
})
export class InputDirective {
  @HostBinding('class') public lufthansaTaskInputClassName = 'lufthansa-task-input';
}
