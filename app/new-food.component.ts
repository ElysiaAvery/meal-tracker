import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h2>Add A New Meal or Snack:</h2>
    <div>
      <label>Enter Time Food was Consumed:</label>
      <input required type="datetime-local" [value]="date"
        (change)="date=$event.target.value" #newDate> {{date}}
    </div>
    <div>
      <label>Enter the name of the food: </label>
      <input required type="text" #newName>
    </div>
    <div>
      <label>Enter amount of calories: </label>
      <input required type="number" #newCalories>
    </div>
    <div>
      <label>Enter details about this meal: </label>
      <input required type="text" #newDetails>
    </div>
    <button (click)="
      addMealClicked(newDate.value, newName.value, newCalories.value, newDetails.value);
      newDate.value='';
      newName.value='';
      newCalories.value='';
      newDetails.value='';
      ">Add Meal</button>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  date: string;
    constructor() {
        this.date = new Date().toISOString().slice(0, 16);
  }
  addMealClicked(date: string, name: string, calories: number, details: string) {
    var newFood: Food = new Food(this.date, name, calories = +calories, details);
    this.newFoodSender.emit(newFood);
  }
}
