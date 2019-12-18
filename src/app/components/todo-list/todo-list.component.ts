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

  }

  remove(id) {
    this.todoService.delete(id);
  }

  setStatus(id, status: TodoStatus) {
    this.todoService.setStatus(id, status);
  }

  bindEventListeners() {
    const removeButton = document.querySelectorAll(".js-remove-todo");
    const doneButton = document.querySelectorAll(".js-done-todo");
    const holdButton = document.querySelectorAll(".js-hold-todo");
    const activeButton = document.querySelectorAll(".js-active-todo");

    this.bindEvents(removeButton, this.remove);
    this.bindEvents(doneButton, this.setStatus, TodoStatus.DONE);
    this.bindEvents(holdButton, this.setStatus, TodoStatus.HOLD);
    this.bindEvents(activeButton, this.setStatus, TodoStatus.ACTIVE);
  }
  bindEvents(btn, callback, status) {
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener(
        "click",
        callback.bind(this, btn[i].getAttribute("data-id"), status)
      );
    }
  }

}
