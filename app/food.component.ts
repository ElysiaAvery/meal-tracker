import { Component, Input } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  template: `
    <div>
      <h2 *ngIf="food.calories"></h2>
    </div>
  `
})

export class FoodComponent {
  
}
