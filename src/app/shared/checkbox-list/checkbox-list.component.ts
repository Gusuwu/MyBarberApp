import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Item } from 'src/app/classes/Item';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
})
export class CheckboxListComponent  implements OnInit {

  @Input() items: Item[] = [];
  @Input() titulo: string = '';

  constructor() {}

  ngOnInit(): void {
  }

  onCheckboxChange(item: Item) {
    item.checked = item.checked;
  }

  getSelectedItems() {
    return this.items.filter(item => item.checked);
  }
}
