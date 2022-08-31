import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, take, takeUntil } from 'rxjs';

import { GenreType } from '@lufthansa-task/models';

import { MovieListSearchForm } from '../models/movie-list-search-form.model';
import { MovieListSearchStoreFacade } from '../store/facade';
import { MovieListSearchFormData } from '../../shared/models/movie-list-search-form-data.model';

@Component({
  selector: 'lufthansa-task-movie-list-search',
  templateUrl: './movie-list-search.component.html',
  styleUrls: ['./movie-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListSearchComponent implements OnInit, OnDestroy {
  @Input() public genreList: GenreType[] | null = [];
  public destroySubject: Subject<void> = new Subject<void>();
  public formGroup: FormGroup = new FormGroup<MovieListSearchForm>({
    name: new FormControl(''),
    genres: new FormGroup({})
  });

  constructor(private movieListSearchStoreFacade: MovieListSearchStoreFacade) {
  }

  public ngOnInit(): void {
    this.setupGenreFormControls();

    this.patchSearchFormWithValuesFromStore();

    this.handleFormValueChanges();
  }

  public ngOnDestroy(): void {
    this.destroySubject.next(void 0);
  }

  public onResetClick(): void {
    this.formGroup.reset();
  }

  private get genresFormGroup(): FormGroup {
    return this.formGroup.get('genres') as FormGroup;
  }

  private setupGenreFormControls(): void {
    if (this.genreList && this.genreList.length) {
      this.genreList.forEach((genre: GenreType) => this.genresFormGroup.addControl(genre, new FormControl(false)));
    }
  }

  /**
   * This is made on purpose that provided search filters on are being remembered by app. When user navigates through
   * movies, and then return to list page the filters in state that user sets will be unchanged. Filters are stored
   * in application store.
   */
  private patchSearchFormWithValuesFromStore(): void {
    this.movieListSearchStoreFacade.searchCriteria$
      .pipe(
        take(1),
        takeUntil(this.destroySubject)
      )
      .subscribe((searchCriteria: MovieListSearchFormData) => this.formGroup.patchValue(searchCriteria));
  }

  /**
   * This is the place where form group values are being provided to store.
   */
  private handleFormValueChanges(): void {
    this.formGroup.valueChanges
      .pipe(
        takeUntil(this.destroySubject)
      )
      .subscribe((searchCriteria: MovieListSearchFormData) => this.movieListSearchStoreFacade.setSearchCriteria(searchCriteria));
  }
}
