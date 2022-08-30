import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

import { ApiService } from '@lufthansa-task/api';
import { Movie } from '@lufthansa-task/models';

@Injectable()
export class MovieListDataService {

  constructor(private apiService: ApiService) {
  }

  public getMovieList(): Observable<Movie[]> {
    return this.apiService.getDataSource()
      .pipe(delay(500));
  }
}
