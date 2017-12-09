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
  @Output() update: EventEmitter<any> = new EventEmitter();
  isComplete: boolean = false;
  inputVisible: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  removeItem() {
    this.remove.emit(this.todoItem);
  }
  completeItem(): void {
    this.isComplete = !this.isComplete;
  }
  showInput() {
    this.inputVisible = true;
  }
  updateItem(newTitle: string) {
    this.update.emit({item: this.todoItem, changes: {title: newTitle}});
    this.inputVisible = false;
  }
}
