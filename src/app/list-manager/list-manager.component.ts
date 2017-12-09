import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list/todo-list.service';
import { TodoListItem } from '../todoListItem.model';

@Component({
  selector: 'todo-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'Let\'s do it!';
  todoList: TodoListItem[];
  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(newTitle: string): void {
    this.todoList = this.todoListService.addItem({title: newTitle});
  }
  removeItem(item: TodoListItem) {
    this.todoList = this.todoListService.removeItem(item);
  }
}
