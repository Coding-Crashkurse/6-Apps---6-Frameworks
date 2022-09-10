import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo = { desc: '' };
  @Input() index = 0;

  constructor() {}

  ngOnInit(): void {}
}
