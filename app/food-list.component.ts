import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">All Foods</option>
      <option value="lowCalorie">Low Calorie Foods</option>
      <option value="highCalorie">High Calorie Foods</option>
    </select>

  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

}

// <div *ngFor="let currentFood of childFoodList">
//   <food-display [food]="currentFood"></food-display>
//   <button (click)="editButtonClicked(currentFood)">Edit Food</button>
// </div>
