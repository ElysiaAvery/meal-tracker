import { Component, Attribute } from '@angular/core'

@Component({
  selector: 'now',
  template: `
    <h3 (updateTime)="updateMyTime()">{{date | date:'MM/dd/yyyy hh:mm:ss'}}</h3>
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
