import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from '../models/todo.model';
import { BaseService } from './../../../../shared/services/base.service';
import { TodoStore } from './../store/todo.store';

@Injectable()
export class TodoService extends BaseService {
  constructor(private http: HttpClient, private store: TodoStore) {
    super();
  }

  get(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_URL}todo`).pipe(tap(next => this.store.set('todo', next)));
  }

  post(task: Task) {
    return this.http.post(`${this.API_URL}todo`, task);
  }

  put(task: Task) {
    return this.http.put(`${this.API_URL}todo/${task.id}`, task);
  }

  delete(taskId: number) {
    return this.http.delete(`${this.API_URL}todo/${taskId}`);
  }
}
