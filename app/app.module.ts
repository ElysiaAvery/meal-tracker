import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewFoodComponent } from './new-food.component';
import { FoodListComponent } from './food-list.component';
import { FoodComponent } from './food.component';
import { CaloriePipe } from './calorie.pipe';
import { EditFoodComponent } from './edit-food.component';
import { TotalPipe } from './total.pipe';
import { TotalCalorieComponent } from './total-calorie.component';
import { Now } from './now.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewFoodComponent,
    FoodListComponent,
    FoodComponent,
    CaloriePipe,
    EditFoodComponent,
    TotalPipe,
    TotalCalorieComponent,
    Now
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
