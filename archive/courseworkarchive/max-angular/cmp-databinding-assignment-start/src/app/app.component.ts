import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  i:number = 0;
  valueofi(i:number):void{
    this.i = i;
  }
}
