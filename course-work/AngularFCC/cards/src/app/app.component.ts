import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // data we will pass from parent to child
  posts = [
    {title: 'Neat Tree', imageUrl:'assets/tree.jpeg', username: 'nature', content: 'I saw this neat tree today.'},
    
    {title: 'Snowy Mountain', imageUrl:'assets/mountain.jpeg', username: 'mountainlover', content: 'Welcome to Himalyas'},
    
    {title: 'Sweet Biking', imageUrl:'assets/biking.jpeg', username: 'biker_12', content: 'Another day, another ride'},
  ]
}
