import { Component, Input } from '@angular/core';

import { CardData } from './card-data.type';

@Component({
  selector: 'sl-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() model?: CardData;
}
