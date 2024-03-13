import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ListItemData } from './list-item-data.type';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'sl-list-item',
  standalone: true,
  imports: [MatIconModule, MatRippleModule],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() model?: ListItemData;
  @Output() close = new EventEmitter<number>();
}
