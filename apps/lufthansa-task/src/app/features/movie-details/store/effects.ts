import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiService } from '@movie/shared/services/api/api.service';
import { loadMovieDetailsAction } from './actions';
import { switchMap, tap } from 'rxjs';

@Injectable()
export class MovieDetailsStoreEffects {

  public loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovieDetailsAction),
      switchMap(() => this.apiService.getDataSource()),
      tap(c => console.log(c))
    ), {dispatch: false}
  )

  constructor(private actions$: Actions,
              private apiService: ApiService) {
  }

}
