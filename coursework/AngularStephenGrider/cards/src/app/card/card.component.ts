import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // Expect data from parent
  @Input() title='';
  @Input() imageUrls: string[] = [];
  @Input() imageCaptions: string[] = [];
  @Input() links: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
}
