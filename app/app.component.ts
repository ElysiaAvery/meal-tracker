import { Component } from '@angular/core';
import { Food } from './food.model';
import { Now } from './now.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <now format="'h:mm:ss'"></now>
    <div class="row">
      <div class="col-sm-4">
        <food-total
          [childSelectedFoodList]="masterFoodList"
        ></food-total>
        <food-list
          [childFoodList]="masterFoodList"
          (clickSender)="showDetails($event)"
        ></food-list>
        <edit-food
          [childSelectedFood]="selectedFood"
          (doneEditingClickedSender)="finishedEditing()"
        ></edit-food>
      </div>
      <div class="col-sm-8">
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
    new Food("", "Pizza", 500, "Didn't eat the crust.")
  ];

  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
