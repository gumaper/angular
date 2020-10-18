import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/modules/material.module';
import { TodoService } from './shared/services/todo.service';
import { TodoStore } from './shared/store/todo.store';
import { TaskItemComponent } from './task-item/task-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [TodoListComponent, TaskItemComponent],
  imports: [CommonModule, TodoRoutingModule, ReactiveFormsModule, MaterialModule],
  providers: [TodoStore, TodoService],
})
export class TodoModule {}
