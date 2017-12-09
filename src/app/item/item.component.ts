import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TodoListItem } from '../todoListItem.model';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: TodoListItem;
  @Output() remove: EventEmitter<TodoListItem> = new EventEmitter();
  isComplete: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  removeItem() {
    this.remove.emit(this.todoItem);
  }
  completeItem(): void {
    this.isComplete = !this.isComplete;
  }
}
