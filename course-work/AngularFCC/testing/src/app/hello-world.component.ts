import { Component } from '@angular/core';

@Component({
    selector: 'app-hello-world',
    template: `<h1>{{title}}</h1>
    <p> Do Something </p>
    `,
    styles: []
})

export class HelloWorldComponent{
    title = "Hello World"
}