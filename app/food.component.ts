import { Component, Input } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  template: `
    <div>
      <h2 *ngIf="food.calories >= 500" class="high-calorie">{{ food.name }}</h2>
      <h2 *ngIf="food.calories < 500" class="low-calorie">{{ food.name }}</h2>
      <h4>{{ food.calories }}</h4>
      <h4>{{ food.details }}</h4>
    </div>
  `
})

export class FoodComponent {
  @Input() food: Food[];

}

// <div class="well" *ngIf="childSelectedFoodList && childSelectedFoodList.length > null">
//   <div class="row" *ngFor="let childSelectedFood of childSelectedFoodList">

// <h2 class="total">Total Calories Consumed: {{foods | total}}</h2>

// </div>
// </div>
