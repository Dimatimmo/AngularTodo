export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
}

export enum TodoStatus {
  ACTIVE,
  HOLD,
  DONE
}
