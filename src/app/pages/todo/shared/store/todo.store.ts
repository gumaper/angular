import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from './../models/todo.model';

export interface TodoState {
  todo: Task[];
}

const todoState: TodoState = {
  todo: [],
};

export class TodoStore {
  private subject = new BehaviorSubject<TodoState>(todoState);
  private store = this.subject.asObservable();

  get value() {
    return this.subject.value;
  }

  public getTodoList(): Observable<Task[]> {
    return this.store.pipe(map(store => store.todo));
  }

  set(name: string, state: any) {
    this.subject.next({
      ...this.value,
      [name]: state,
    });
  }
}
