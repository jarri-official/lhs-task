import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

import { ApiService } from '@lufthansa-task/api';
import { Movie } from '@lufthansa-task/models';

@Injectable()
export class MovieListDataService {

  constructor(private apiService: ApiService) {
  }

  /**
   * This delay adds feel of that app is really loading something.
   */
  public getMovieList(): Observable<Movie[]> {
    return this.apiService.getDataSource()
      .pipe(delay(500));
  }
}
