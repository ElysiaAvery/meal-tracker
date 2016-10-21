import { Component, Attribute } from '@angular/core'

@Component({
  selector: 'now',
  template: `
    <h2 (updateTime)="updateMyTime()">{{date | date:'dd/MM/yyyy hh:mm:ss'}}</h2>
  `
})
export class Now {
   private date;

  constructor(
    @Attribute("format") format) {
    this.date =  new Date();

    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }

}
