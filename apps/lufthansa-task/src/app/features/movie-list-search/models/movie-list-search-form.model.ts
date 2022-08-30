import { AbstractControl } from '@angular/forms';

export interface MovieListSearchForm {
  name: AbstractControl<string | null>;
  genres: AbstractControl;
}
