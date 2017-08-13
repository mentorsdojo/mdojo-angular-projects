import { Component, OnInit } from '@angular/core';

import { NgNotifyPopup } from 'ng2-notify-popup';
import { NotificationService } from 'ng2-notify-popup';

import { TodoService } from './todo.service';
import { CompService } from '../comp.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService, NotificationService, CompService]
})

export class TodoComponent implements OnInit {
  private todos;
  private activeTasks;
  private newTodo;

  title = 'Todos';

  constructor(private todoService: TodoService, private cmpService?: CompService,
    private notificationService?: NotificationService) { }


  getTodos() {
    return this.todoService.get().then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter(todo => todo.isDone).length;
    });
  }

  addTodo() {
    if (this.cmpService){
      let parentCtrl = this.cmpService.getParent();

      this.todoService.add({ title: this.newTodo, isDone: false }).then(() => {
      return this.getTodos();
      }).then(() => {
        this.newTodo = ''; // clear input form value
      });
    }

    this.notificationService.show('Success');
  }

  ngOnInit() {
    this.getTodos();
  }

}
