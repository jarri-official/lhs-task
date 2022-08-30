import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '@lufthansa-task/models';

@Injectable()
export abstract class ApiService {
  constructor(protected http: HttpClient) {
  }

  public abstract getDataSource(): Observable<Movie[]>;
}
