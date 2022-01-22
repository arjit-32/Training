import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetter= false;
  includeNumber= false;
  includeSymbol= false;
  inputLength = 0;
  password='';

  onInputLength(event: any){
    this.inputLength= event.target.value;
  }

  onChangeUseLetters(){
    this.includeLetter = !this.includeLetter;
  }
  onChangeUseNumber(){
    this.includeNumber = !this.includeNumber;
  }
  onChangeUseSymbol(){
    this.includeSymbol = !this.includeSymbol;
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetter) {
      validChars += letters;
    }
    if (this.includeNumber) {
      validChars += numbers;
    }
    if (this.includeSymbol) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.inputLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

}
