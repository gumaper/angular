import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

export class CrudService<T> extends BaseService {
  protected http: HttpClient;

  constructor(protected API_URL: string, protected injector: Injector) {
    super();
    this.http = injector.get(HttpClient);
  }

  get(): Observable<T[]> {
    return this.http.get<T[]>(this.API_URL);
  }
}
