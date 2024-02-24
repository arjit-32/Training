import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{servername: string, servercontent: string}>();
  @Output() blueprintCreated = new EventEmitter<{servername: string, servercontent: string}>();
  @ViewChild('serverContentInput',{static: true}) serverContentInput: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement){
    this.serverCreated.emit({servername: serverNameInput.value, servercontent: this.serverContentInput.nativeElement.value});
  }
  
  onAddBlueprint(serverNameInput: HTMLInputElement){
    this.blueprintCreated.emit({servername: serverNameInput.value, servercontent: this.serverContentInput.nativeElement.value});
  }
 

}
