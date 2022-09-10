import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css'],
})
export class AddtodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string, event: MouseEvent) {
    event.preventDefault();
    this.newItemEvent.emit(value);
  }
}
