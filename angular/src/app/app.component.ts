import { Component } from '@angular/core';

interface Todo {
  desc: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];
  title = 'angular';

  addItem(newItem: string) {
    let newitem = { desc: newItem };
    this.todos.push(newitem);
  }
}
