import { Component, OnInit } from '@angular/core';
import { TodoStatus, Todo } from "../../interfaces/todo"
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {

    this.bindEventListeners();
  }

  bindEventListeners() {
    const addButton = document.querySelector(".js-add-todo");

    addButton.addEventListener("click", this.addTodo.bind(this));
  }

  addTodo() {
    const title = document.querySelector(".js-title-value") as HTMLInputElement;
    const description = document.querySelector(
      ".js-description-value"
    ) as HTMLInputElement;

    if (!title.value || !description.value) {
      alert("Input title and description");
    } else {
      const titleValue = title.value;
      const descriptionValue = description.value;

      const todo: Todo = {
        id:
          Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15),
        title: titleValue,
        description: descriptionValue,
        status: TodoStatus.ACTIVE
      };

      this.todoService.add(todo);

      title.value = "";
      description.value = "";
    }
  }

}
