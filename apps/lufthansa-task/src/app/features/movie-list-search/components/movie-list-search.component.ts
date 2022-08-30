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
    if (this.genreList && this.genreList.length) {
      this.genreList.forEach((genre: GenreType) => this.genresFormGroup.addControl(genre, new FormControl(false)));
    }

    this.movieListSearchStoreFacade.searchCriteria$
      .pipe(
        take(1),
        takeUntil(this.destroySubject)
      )
      .subscribe((searchCriteria: MovieListSearchFormData) => this.formGroup.patchValue(searchCriteria));

    this.formGroup.valueChanges
      .pipe(
        takeUntil(this.destroySubject)
      )
      .subscribe((searchCriteria: MovieListSearchFormData) => this.movieListSearchStoreFacade.setSearchCriteria(searchCriteria));
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
}
