import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '@lufthansa-task/models';
import { ApiService } from '@lufthansa-task/api';

/**
 * Demonstration of DI
 */
@Injectable()
export class ApiMoviesDataService extends ApiService {
  public override getDataSource(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/data-source/movies-data.json');
  }
}
