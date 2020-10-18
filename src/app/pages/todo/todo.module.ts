import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksIniciadasComponent } from './tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './tasks-finalizadas/tasks-finalizadas.component';


@NgModule({
  declarations: [TodoListComponent, TasksComponent, TasksIniciadasComponent, TasksFinalizadasComponent],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
