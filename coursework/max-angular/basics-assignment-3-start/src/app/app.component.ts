import { Time } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnstatus: Boolean = false;
  btnClickTimestamps: Array<Date> = [];

  clicked(){
    this.btnstatus=!this.btnstatus;
    this.btnClickTimestamps.push(new Date());
  }
}
