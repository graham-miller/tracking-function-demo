import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from '../models/item.interface';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  addItem() {
    const items = [];

    for (let id = 1; id <= this.items.length + 1; id++) {
      items.push({ id, name: `Item ${id}` });
    }

    this.items = items;
  }

  trackById(index, item): number {
    return item.id;
  }
}
