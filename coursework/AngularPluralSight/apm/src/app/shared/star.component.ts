import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StarComponent implements OnChanges{
  @Input() rating=0;
  cropWidth = 100;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
  this.cropWidth = this.rating * 75/5;
}

onClick(): void{
  this.ratingClicked.emit(`Rating clicked is ${this.rating}`);
}

}