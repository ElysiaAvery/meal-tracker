import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-total',
  template: `
  <div class="well" *ngIf="childSelectedFoodList && childSelectedFoodList.length > 0">
    <div class="row" *ngFor="let childSelectedFood of childSelectedFoodList">
    </div>
      <h2 class="total">Total Calories: {{ childSelectedFoodList.calories | total | number:'1.1-2'}}</h2>
  </div>
  `
})

export class TotalCalorieComponent {
  @Input() childSelectedFoodList: Food[];
}
