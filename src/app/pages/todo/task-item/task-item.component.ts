import { TodoService } from './../shared/services/todo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../shared/models/todo.model';
import { TodoStore } from '../shared/store/todo.store';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() title: string;
  tasks$: Observable<Task[]>;

  constructor(private store: TodoStore, private todoService: TodoService) {}

  ngOnInit(): void {
    if (this.title === 'task')
      this.tasks$ = this.store.getTodoList().pipe(map(todo => todo.filter(task => !task.iniciado && !task.finalizado)));

    if (this.title === 'iniciado')
      this.tasks$ = this.store.getTodoList().pipe(map(todo => todo.filter(task => task.iniciado && !task.finalizado)));

    if (this.title === 'finalizado')
      this.tasks$ = this.store.getTodoList().pipe(map(todo => todo.filter(task => task.finalizado)));
  }

  removerTask(taskId: number) {
    this.todoService.delete(taskId).subscribe(res => {
      let todo = this.store.value.todo;
      const indice = this.store.value.todo.findIndex(element => element.id === taskId);
      todo.splice(indice, 1);
      this.store.set('todo', todo);
    });
  }

  updateTask(task: Task, action: string) {
    switch (action) {
      case 'iniciar': {
        task.finalizado = false;
        task.iniciado = true;
        break;
      }
      case 'cancelarInicio': {
        task.finalizado = false;
        task.iniciado = false;
        break;
      }
      case 'finalizar': {
        task.finalizado = true;
        task.iniciado = true;
        break;
      }
      case 'cancelarFinalizado': {
        task.finalizado = false;
        task.iniciado = true;
        break;
      }
    }

    this.todoService.put(task).subscribe(res => {
      const value = this.store.value.todo;

      const todo = value.map(tasks => {
        if (task.id === tasks.id) {
          return { ...task, ...task };
        } else {
          return tasks;
        }
      });

      this.store.set('todo', todo);
    });
  }
}
