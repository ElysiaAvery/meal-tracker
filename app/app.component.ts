import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <div class="row">
      <div class="col-sm-6">
        
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
    new Food("Pizza", 400, "Didn't eat the crust.")
  ];

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
