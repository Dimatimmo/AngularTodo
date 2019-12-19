import { Component, OnInit } from '@angular/core';
import { TodoStatus, Todo } from "../../interfaces/todo"
import { TodoService } from "../../services/todo.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {
    this.todoService.todos$.subscribe((todos: Todo[]) => {
      this.todos = todos;
      this.ngOnInit();
    });
   }


  ngOnInit() {
    console.log(this.todos)
  }
  remove(id) {
    this.todoService.delete(id);
  }

  setStatusActive(id) {
    this.todoService.setStatusActive(id);

  }

  setStatusDone(id) {
    this.todoService.setStatusDone(id);
  }

  setStatusHold(id) {
    this.todoService.setStatusHold(id);
  }
}
