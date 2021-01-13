import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: TodoItem[] = [
    { description: 'Get More Beer', complete: true },
    { description: 'Get Light Bulbs', complete: false }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(what: HTMLInputElement): void {
    this.items = [{ description: what.value, complete: false }, ...this.items];
    what.value = '';
    what.focus();
  }

  markComplete(item: TodoItem): void {
    item.complete = !item.complete;
  }

  clearCompletedItems(): void {
    this.items = this.items.filter(i => !i.complete);
  }

  get hasCompletedItems(): boolean {
    return this.items.filter(i => i.complete).length > 0;
  }
}
