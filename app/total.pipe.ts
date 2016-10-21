import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "total",
  pure: false
})
export class TotalPipe {
  transform(input: Food[]) {
    console.log(input + "total pipe");
    if(input){
      var output: number = 0;
      for(var i = 0; i < input.length; i++) {
        output = input[i].calories + output;
        console.log(output + "pipe output");
      }
      return output;
    }
  }
}
