import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

import { ApiService } from '@lufthansa-task/api';
import { Movie } from '@lufthansa-task/models';

@Injectable()
export class MovieDetailsDataService {

  constructor(private apiService: ApiService) {
  }

  public getMovieDetails(key: string): Observable<Movie | null> {
    return this.apiService.getDataSource()
      .pipe(
        map((movieList: Movie[]) => {
          return movieList.find((movie: Movie) => movie.key === key) || null;
        }),
        delay(1000)
      )
  }
}
