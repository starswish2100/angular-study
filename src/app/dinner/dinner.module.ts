import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food/food.component';
import { DrinkComponent } from './drink/drink.component';

@NgModule({
  declarations: [FoodComponent, DrinkComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FoodComponent,
    DrinkComponent
  ]
})
export class DinnerModule { }
