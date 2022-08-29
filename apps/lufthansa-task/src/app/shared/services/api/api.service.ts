import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '@movie/shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getDataSource(): Observable<Movie> {
    return this.http.get<Movie>('/data-source/movies-data.json');
  }
}
