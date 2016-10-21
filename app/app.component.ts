import { Component } from '@angular/core';
import { Food } from './food.model';
import { Now } from './now.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="row jumbotron">
      <div class="col-sm-4">
        <h1>Meal Tracker</h1>
        <now format="'h:mm:ss'"></now>
      </div>
      <div class="col-sm-8">
        <food-total
          [childSelectedFoodList]="masterFoodList"
        ></food-total>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
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
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-6">
        <h3><a id="body" href="https://thebodyisnotanapology.com/">Click Here to learn about Body Positivity.</a></h3>
      </div>
      <div class="col-sm-2"></div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [

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
