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

---
# Data Binding & Pipes

_Binding :_
Coordinates communication between the component's class and its template and often innvolves passing data.

1. Interpolation: Data from class to template

    ```ts
    <h1>{{title}}</h1> // insert between html tags
    {{'Name:'+pageTitle}}
    {{2*20+1}}

    <h1 innerText={{title}}> // Or in html attribute
    ```

2. Property Binding: Data from class to template

    ```ts
    <img [src]='product.imageUrl'> // Write template expn inside quotes
    // <img src={{'home/products/'+product.imageUrl}}> Interpolation is usefull in longer expns
    ```

3. Event Binding: event to method in class

    ```ts
    <button (click)='toggleImage()'>
    ```

4. 2 Way binding : On changing input text variable in class also changes

    ```ts
    // In template
    <input type="text" [(ngModel)]='listFilter'> 
    <div> {{listFilter}} </div>

    // In Class
    listFilter = 'cart'; 
    ```

_Directive:_

Custom HTML element or attribute used to power up and extend our HMTL. Can be custom(components) or built-in(structural directives - *ngIf, *ngFor)

```ts
//ngIf example
 <div *ngIf='products.length'> </div>

 //ngfor example
 <ul>
    <li *ngFor="let product of products">{{product.name}}</li>
</ul>           
```

_Pipes:_
Transform bound properties before display. Built in pipes - date,number,decimal,percent,currency, json etc

```ts
{{ product.name | lowercase}}

<img [src]='product.url' [title]='product.name | uppercase' >

{{product.price | currency: 'USD' : 'symbol': '1.2-2'}} // Pipe parameters are seperated with colons
// 1 to left of decimal, min-2 and max-2 on right of decimal
```

Building custom pipe to replace any char with space in a string

```ts
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'convertToSpace'})
export class ConvertToSpace implements PipeTransform{
    transform(value: string, charachter: string): string{
          return value.replace(charachter,' ');
    }
}
```

# Advanced Components

_Interfaces_

Strong Typing - 
```ts
    x: string = 'Sample';
    someFunction(x: string): void{ //Code }
```
To avoid having 'any' type use interfaces.
```ts
export interface IProduct{
    id: number;
    name: string;
}
// Can now use this Product interface as type
products: IProduct[] = []; //Better than products: any[] = [//data]
```
_Lifecycle_

Create - Render - Create & Render children - Process change(when data bound properties change) - Destroy

Lifecycle hook is an interface we implement to write code when a component lifecycle occurs.
Ex - OnInit, OnChanges, OnDestroy


_Nested Components_

- Sending data from parent to child component
Use @Input

```ts
// Inside parent.component.html
<child [data]='someData'></child>

// Inside child.component.ts
export class ChildComponent{
   @Input() data: string;
} 
```

- Sending data from child to parent component
Use @Output

```ts
// Inside child.component.ts
export class ChildComponent{
   @Output() notify: EventEmitter<string> = new EventEmitter<string>();
   
   sendDataOnClick(){ this.notify.emit('Clicked'); }
} 


// Inside child.component.html
<div (click)='sendDataOnClick()'></div>

// Inside parent.component.html
<child (notify)='onNotify($event)'> // listen for notify property of child component, $event is used to access the data

// Inside parent.component.ts
export class ParentComponent{
onNotify(msg: string): void{
   console.log(msg);
}
}
```

# Services and Dependency Injection

Service is a class with focussed purpose. Used for features independent of component, sharing data across components

Dependency Injection is coding pattern in which a class recieves the instances of objects it needs from external source than creating itself.


```ts
// In product.service.ts
import { Injectable } from '@angular/core';
@Injectable({
   providedIn: 'root' // from angular 6+
})
export class ProductService{
   getData(): IProduct[]{}
}

// In product.component.ts
import { ProductService } from './product.service';
export class ProductService{
  constructor(private productService: ProductService){} // shorthand to declare and assign a variable
}
```

_Angular Injectors_ 
Injectors are used to register your service.
Apart from Root Injector there are injectors for each component.
- Root Injector: Service available throughout the appln.
- Component Injector: Service available only to component & its child components.Provides multiple instances of service.
 
Ways to register a service - 
```ts
// Method1 - Use providedIn inside service class
// Method2. Use providers in class you need the service
@Component({
  templateUrl: './some/some.html',
  providers: [ProductService]
})

```

# Retrieving data using HTTP

_RxJS(Reactive Extensions)_
Library for composing data using observable sequences & transforming that data using operators.
Helps in working with data(specially async data)

To send request we use HTTP, but what do we use to set-up notifications. 
Thats where RxJS observable sequence comes in.

An observable doesnt do anything untill we subscribe.Once we do has 3 notifs.
- next: Next item is emitted
- error: Error occurred, no more item emitted
- complete: No more item emitted
 
Process - Start Observable(subscribe) - Pipe emitted items through set of operators - Process Notifs(next,error,complete) - Stop the observables

```ts
import { Observable, range} from 'rxjs';
import { filter } from 'rxjs/operators';

// Dollar after variable is just to distinguish, not a part of syntax
const source$: Observable<number> = range(0,10);

source$.pipe(
    filter(x => x%2 == 0)
  ).subscribe(x => console.log(x))
```

_Working with HTTP_

```ts
//Import HttpClientModule in app.module.ts

// in product.service.ts
export class ProductService{   
   constructor(private http: HttpClient){}
   
   getProducts(): Observable<IProduct[]> {
     return this.http.get<IProduct[]>('www.someurl.com/api/products').pipe(
	tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
     );
   }
   private handleError(err: HttpErrorResponse){}
}

// in product.component.ts
ngOnInit(): void{
    this.productService.getProducts().subscribe({
       next: products => this.products = products, //assign local products array to products we got on subscribing to observable
       error: err => this.errorMessage = err
  });
}

ngOnDestroy(): void{
     this.sub.unsubscribe();
}


```

# Navigation and Routing Basics

Configure a route for each component. Tie routes to option/action(ex-button click).
Activate route based on user action, and on activating display component's view

3 steps - 
- Import RouterModule and specify path and components
- Add routerLink to anchor tags
- Add <router-outlet> where we want our components to display 

```ts 
// In app.module.ts
import: [
 BrowserModule,
 RouterModule.forRoot([
      { path: 'products', component: ProductsComponent},
      { path: 'products/:id', component: ProductDetailsComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch:'full'},
      { path: '**', redirectTo: 'wel come', pathMatch:'full'},
    ])
 ]

// Add links
<a routerLink='/welcome'>Home</a>
<a [routerLink]="['/products', product.productId]">Home</a> //first element is path, all other are route parameters

// In app.component.html
<router-outlet></router-outlet>

```

RouterModule.forRoot is used to 
Register Router Service, Declare router directives, Expose configured services.

Sending parameters in URL - 

If sending parameter in url "products/2", we get them using ActivatedRoute
```ts 
import {ActivatedRoute} from '@angular/router';
constructor(private route: ActivatedRoute){}

// Snapshot:Read the parameter 1 time.
this.route.snapshot.paramMap.get('id');

// Observable:Read emitted parameters as they change
this.route.paramMap.subscribe(
   params => console.log(params.get('id'))
);
```
Activating Route with Code -
```ts
import { Route } from '@angular/router';

constructor(private router: Router){}

someFunc(): void{
   this.router.navigate(['/products']);
}
```
Protecting Routes with Guards - 
CanActivate(Guard navigation to route), CanDeactivate(Guard navigation from a route), Resolve(Pre fetch data before activating a route), CanLoad(Prevent asynchronous routing)

```ts
// Mention Guard name in routing
{ path: 'products/:id', canActivate: [ ProductDetailsGuard ], component: ProductDetailsComponent }

// In product-details.guard.ts
@Injectable({ providedIn: 'root' })
export class ProductDetailsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id= Number(route.paramMap.get('id'));
    if(isNaN(id) || id<1){
      alert('Invalid Product Id');
      this.router.navigate(['/products']);
      return false;
    } 
    return true;
}
```


Can also create guard using CLI - ng g g products/product-detail


Handling Null & Undefined - 
```ts
// Using |
product: IProduct | undefined; // interface or undefined

// Using Safe navigation operator in template
<div> {{ product?.productName }} </div>  // If objects property is null or undefined, simply returns null and doesnt throw error

// Use *ngIf
<div *ngId='product'> {{ product.productName }} </div>
```


# Angular Modules
Module - A class with NgModule decorator. Its Purpose is
- Organize the pieces of our appln
- Arrange them in blocks
- Extend ou r appln with capabilities from external libraries
- Provide template resolution environment.
- Aggregate and re-export

Declaration array - Every component,directive, and pipe we create must belong to one and only one angular module.
All declared components,directives, and pipes are private by default. They are accessible only within module or when exported.

import array in a module, imports any components or modules(then any thing exported by this module will be available to the module that imported it)
```ts
// In product.module.ts
@NgModule({
  declarations: [
    ProductsComponent
    ProductDetailsComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forChild([
      { path: 'somePlace', component: ProductsComponent},
    ]),
    SharedModule // Anything exported by shared module will be available
  ]
})

// In shared.module.ts
@NgModule({
  declarations: [
    StarComponent,
    convertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    convertToSpacesPipe
  ]
})
```

Points to note:
In sub Modules we use RouterModule.forChild
Genreating module with CLI - ng g m shared/shared --flat -m products/product.module


# Angular CLI

A command line interface for angular
purpose - 
- Build and Angular appln
- Generate Angular files
- Build and serve appln
- Run tests
- Prepare appln for deployment

ng <command> <args> --<options>

Angular CLI is present globally and automatically created for each project and overtime if new version rolls out they match step by step
Install globally: npm install -g @angular/cli
Help: ng help
Check version: ng V
New project: ng new hello-world --prefix hw
Serving appln: ng serve
Generating Code: 
	Components(ng g c <name>)
	Directives(ng g d <name>)
	Route guards(ng g g <name>)
	Interfaces(ng g i <name>)
	Modules(ng g m <name>)
	Pipes(ng g p <name>)
	Services(ng g s <name>)
Run Unit Testing: ng test
Building appln: ng build
Deploy: ng deploy





















