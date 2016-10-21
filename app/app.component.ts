import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <div class="row">
      <div class="col-sm-6">
        <food-list
          [childFoodList]="masterFoodList"
          (clickSender)="showDeatils($event)"
        ></food-list>
      </div>
      <div class="col-sm-6">
        <new-food
          (newFoodSender)="addFood($event)"
        ></new-food>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Pizza", 500, "Didn't eat the crust.")
  ];

  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
