import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
interface Item {
  id: number;
  description: string;
  checked: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  month: string = 'Mayo';
  newTask = new FormControl('');
  faCoffee = faCoffee;

  listItem: Item[] = [
    { id: 1, description: 'Comprar leche en el super', checked: false },
    { id: 2, description: 'Sacar la basura', checked: false },
    { id: 3, description: 'Hacer tarea de procesos', checked: false },
  ];

  completeListItems: Item[] = [];

  constructor() {}

  ngOnInit(): void {}

  addNewTask(): void {
    const newTaskId: number = this.listItem[this.listItem.length - 1].id + 1;
    this.listItem = [
      ...this.listItem,
      {
        id: newTaskId,
        description: this.newTask.value,
        checked: false,
      },
    ];
    this.newTask.setValue('');
  }

  onCheckedTask(itemSelected: Item): void {
    const foundItem = this.completeListItems.find(
      (item) => item.id === itemSelected.id
    );
    console.log({ foundItem });
    if (foundItem) {
      this.completeListItems = this.completeListItems.filter(
        (item) => item.id !== itemSelected.id
      );
      this.listItem = [...this.listItem, itemSelected];
    } else {
      this.completeListItems = [...this.completeListItems, itemSelected];
      this.listItem = this.listItem.filter(
        (item) => item.id !== itemSelected.id
      );
    }
  }
}
