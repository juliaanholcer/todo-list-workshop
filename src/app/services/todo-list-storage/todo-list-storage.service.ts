import { Injectable } from '@angular/core';

import { TodoListItem } from '../../todoListItem.model';

const storageName = 'abh_todo_list';
const defaultList: TodoListItem[] = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];
@Injectable()
export class TodoListStorageService {
  private todoList: TodoListItem[];
  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }
  get(): TodoListItem[] {
    return [...this.todoList];
  }
  push(item: TodoListItem): TodoListItem[] {
    this.todoList.push(item);
    return this.update();
  }
  private update(): TodoListItem[] {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.get();
  }
  private findItemIndex(item: TodoListItem): number {
    return this.todoList.indexOf(item);
  }
  put(item: TodoListItem, changes: TodoListItem): TodoListItem[] {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    // this.todoList[this.findItemIndex(item)] = {
    //   ...this.todoList[this.findItemIndex(item)],
    //   changes,
    // };
    return this.update();
  }
  destroy(item: TodoListItem): TodoListItem[] {
    this.todoList.splice(this.findItemIndex(item),1);
    return this.update();
  }
}
