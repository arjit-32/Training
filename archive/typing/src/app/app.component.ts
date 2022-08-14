import { randQuote  } from '@ngneat/falso';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  randomText = randQuote() // generate random quote using Falso library
  enteredText = "";
  accuracy = 0;
  speed = 0;
  time = Math.floor(this.randomText.length / 4); // 4 keystrokes per second
  starttime = this.time; // To know initial total time
  intervalId: ReturnType<typeof setInterval> = setInterval(() => {
    if (this.time == 0 || this.enteredText.length==this.randomText.length) {
      clearInterval(this.intervalId);
      this.accuracy = Number(checkAccuracy(this.enteredText, this.randomText).toFixed(2));
      this.speed = Number((this.enteredText.length/this.starttime).toFixed(2));
      return;
    }
    this.time = this.time - 1;
  }, 1000)

  onInput(value: string) {
    this.enteredText = value;
  }
}

function checkAccuracy(enteredText: string,randomText: string) {
  let c = 0;
  for (let i = 0; i < enteredText.length; ++i){
    if (enteredText[i] === randomText[i]) c += 1;
  }
  return c / enteredText.length * 100;
}

