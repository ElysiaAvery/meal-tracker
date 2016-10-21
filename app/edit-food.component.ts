import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="childSelectedFood">
      <h2>Edit This Food</h2>
      <div>
        <label>Enter Food's Name:</label>
        <input [(ngModel)]="childSelectedFood.name">
      </div>
      <div>
        <label>Enter Food's Calories:</label>
        <input [(ngModel)]="childSelectedFood.calories">
      </div>
      <div>
        <label>Enter Food's Details:</label>
        <input [(ngModel)]="childSelectedFood.details">
      </div>
      <div>
        <button (click)="doneEditingClicked()">Done Editing</button>
      </div>
    </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneEditingClickedSender = new EventEmitter();
  doneEditingClicked() {
    this.doneEditingClickedSender.emit();
  }
}
