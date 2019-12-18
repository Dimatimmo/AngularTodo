import { Component, OnInit } from '@angular/core';
import { TodoStatus, Todo } from "../../interfaces/todo"
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(private todoService: TodoService) {
    this.todoService.todos$.subscribe((todos: Todo[]) => {
      this.ngOnInit();
    });
   }

  ngOnInit() {
  }

}
