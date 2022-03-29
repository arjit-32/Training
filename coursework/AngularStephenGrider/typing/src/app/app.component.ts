import { randQuote  } from '@ngneat/falso';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  time = new Date().toLocaleString();
  randomText = randQuote()
  enteredText = "";
  onInput(value: string) {
    this.enteredText = value;
  }

}



