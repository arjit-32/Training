# Getting the tools

- Typescript
Open source lang by Microsoft
Transpiles to JS
Strongly typed
OOPs like

- npm
Open source repository
Command line utility for interacting with the repository
Also executes scripts

- Angular & Angular CLI : Makes dev easy

- package.json: Lists package we need for Angular proj
dependencies: Req for dev & deployment
devDependencies: Just for dev(Angular cli, typescript)

# Components

Component = Template(Layout, includes binding & directives) + Class(TS, Properties & Methods supporting view) + Metadata(Defined with decorator)

_Decorator_ : A function that adds metadata to a class or its members. Prefixed with @

Example - app.component.ts
```
@Component({
    selector: 'custom-tag', //selector defines component's directive(custom tag)
    template: ` <div>Hello {{userName}}</div> `
    })
export class AppComponent{
    userName: string = 'Arjit'
}
```

_Angular Module_ : Helps in organization, boundaries and template resolution environment.

Example - app.module.ts
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent]
})
export class AppModule { }
```

# Templates, Interpolation and Directives

3 ways to make templates - 
- Inline - template: "<h1>{{title}}</h1>"
- Inline(with backticks) - template: `
<h1>{{title}}</h1>
`
- Linked - templateUrl: './name.component.html'