import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h2>Add A New Meal or Snack:</h2>
    <div>
      <label>Enter the name of the food: <label>
      <input required type="text" #newName>
    </div>
    <div>
      <label>Enter amount of calories: <label>
      <input required type="number" #newCalories>
    </div>
    <div>
      <label>Enter details about this meal: <label>
      <input required type="text" #newDetails>
    </div>
    <button (click)="
      addClicked(newName.value, newCalories.value, newDetails.value);
      newName.value='';
      newCalories.value='';
      newDetails.value='';
      ">Add Meal</button>
  `
})

export class NewFoodComponent {

}
