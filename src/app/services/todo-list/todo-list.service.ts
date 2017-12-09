import { Injectable } from '@angular/core';

import { TodoListItem } from '../../todoListItem.model';
import { TodoListStorageService } from '../todo-list-storage/todo-list-storage.service';

@Injectable()
export class TodoListService {
  private todoList: TodoListItem[];
  constructor(private storage: TodoListStorageService) { }

  getTodoList(): TodoListItem[] {
    return this.storage.get();
  }
  addItem(item: TodoListItem): TodoListItem[] {
    return this.storage.push(item);
  }
  removeItem(item: TodoListItem): TodoListItem[] {
    return this.storage.destroy(item);
  }
  updateItem(item: TodoListItem, changes): TodoListItem[] {
    return this.storage.put(item, changes);
  }
}
