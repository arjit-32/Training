import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name: string = "";
  updateName(event: Event){
    this.name = (event.target as HTMLInputElement).value;
  }
}
