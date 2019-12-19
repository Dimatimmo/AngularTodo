import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import {Todo, TodoStatus} from '../interfaces/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todos: Todo[] = [];
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject(this.todos);

  add(todo: Todo) {
    this.todos.push(todo);
    this.todos$.next(this.todos);
  }

  update() {}

  setStatusHold(id: string) {
    const indx = this.todos.findIndex(x => x.id === id);
    this.todos[indx].status =  TodoStatus.HOLD;
    this.todos$.next(this.todos);
  }

  setStatusActive(id: string) {
    const indx = this.todos.findIndex(x => x.id === id);
    this.todos[indx].status = TodoStatus.ACTIVE;
    this.todos$.next(this.todos);
  }

  setStatusDone(id: string) {
    const indx = this.todos.findIndex(x => x.id === id);
    this.todos[indx].status =  TodoStatus.DONE;
    this.todos$.next(this.todos);
  }

  delete(id: string) {
    this.todos.splice(this.todos.findIndex(x => x.id === id), 1);
    this.todos$.next(this.todos);
  }
}
