import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy{
  ngOnInit(){
    console.log("Hello from ngOnInit");
  }

  ngOnDestroy(){
    console.log("OnDestroy")
  }

}
