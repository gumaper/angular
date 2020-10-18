import { TodoStore } from './../shared/store/todo.store';
import { Task } from './../shared/models/todo.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from './../shared/services/todo.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Task[];
  subscription: Subscription;
  nomeTask: FormControl = new FormControl();

  constructor(private todoService: TodoService, private store: TodoStore) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.todoService.get().subscribe(res => (this.todos = res));
  }

  adicionarTask() {
    let task: Task = {
      nome: this.nomeTask.value,
      finalizado: false,
      iniciado: false,
    };

    this.todoService.post(task).subscribe((res: Task) => {
      const todo = [...this.todos, res];
      this.store.set('todo', todo);
      this.nomeTask.reset();
    });
  }
}
