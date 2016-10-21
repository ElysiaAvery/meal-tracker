import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <new-food
      (newFoodSender)="addFood($event)"
    ></new-food>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [

  ];

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
