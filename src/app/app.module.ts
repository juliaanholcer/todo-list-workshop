import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './services/todo-list/todo-list.service';
import { TodoListStorageService } from './services/todo-list-storage/todo-list-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    ListManagerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ TodoListService, TodoListStorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
