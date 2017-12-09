import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title: string;
  constructor() { }

  ngOnInit() {
  }
  changeTitle(inputElementReference): void {
    this.submit.emit(inputElementReference.value);
    inputElementReference.value = '';
  }
  // generateTitle() {
  //   return 'This is a title generated by a method.';
  // }
}
