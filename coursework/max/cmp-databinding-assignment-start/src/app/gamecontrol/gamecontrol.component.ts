import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit,DoCheck {
  i:number = 0;
  ref:any;
  @Output() valueofi: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void{
    // console.log(this.i);
  }

  startgame(){
    this.ref = setInterval(()=>this.i+=1, 1000);
    this.valueofi.emit(this.i);
  }

  stopgame(){
    clearInterval(this.ref);
  }
}
