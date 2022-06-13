# Introduction

Types - 
1. Template-driven Forms
Use a component's template
Unit test against DOM is inaccurate & difficult

2. Reactive Forms
Use a component's template
Create a Form Model in typescript(must be in sync with template)
Unit Test is easier
Validation in Form Model is easier.


# Forms Basics

_NgForm_ : To get properties associated with form

```ts
<form #form='ngForm'> // pound creates a template referrence variable
  // Some code
</form>

{{ form | json}}
```

_NgModel_ : Placed on every input field to let angular know

```ts
// Mark every field with ngModel
<input id="name" name="name" class="form-control" ngModel>
```

_Data Model_ : Create a interface so that data is organized
for a form collecting user settings like name, interface style, notes etc make a 
interface called userSettings

_2-way data binding_ : banana in a box [()]
If form data changes, variable in class file also changes

```ts
// In user-settings-from.html
<input id='name' [(ngModel)]='name' />

// In user-settings-form.component.ts
name: string = 'Arjit';
```


# Form Validation

_html validation_
required, pattern for regex, minlength, maxlength, min, max

_Css classes_
ng-untouched, ng-touched
ng-valid, ng-invalid
ng-pristnie, ng-dirty


_NgModel Properties for Validation_
untouched, touched
pristine, dirty
valid, invalid

These are properties of ngModel object. A way to acces it is by assigning to template variable
```ts
<input #propertyTest='ngModel' name='name' ngModel />
{{ propertyTest.valid }}
```

_Styling_
```css
// small error msg in html
<input id='name' [(ngModel]='name' required #nameField='ngModel' >
<div [hidden]='nameField.valid || nameField.untouched'>Enter a name</div>

// adding styles to css classes
.ng-invalid:not(form).ng-touched{
   border: 1px solid red;
}
```

_Validation on Submitting_
```ts
// html
<form #form='ngForm' (ngSubmit)='onSubmit(form)'>
   <input name="name" [(ngModel)]='name' #nameField='ngModel'
	[class.field-error]='form.submitted && nameField.invalid'>
   // Only add field-error class when form is submitted and nameField is invalid 
   <div [hidden]='!form.submitted || nameField.valid' class='alert alert-danger'>
	Enter a name
   </div>
</form>
	

// class file
onSubmit(form: NgForm){
	// validate fields
}

// css
.field-error{
  border: 1px solid red;
}
```

_Handling Form Controls_

Execute code when a input field looses focus.

```ts
// in html
<input #nameField='ngModel' (blur)='onBlur(nameField)' />

// in class file
onBlur(field: NgModel){
   console.log('on blur do this or that', field.value);
}


# Form Posting and Data Access

Steps - 
1. Create a Data Service (@Injectable() and providedIn: 'root')
2. Post forms using Observable (observable.subscribe(success,error))
3. HTTP access using HttpClient(Uses HttpClientModule, Inject HttpClient in data service)
4. Post form using HttpClient(http.post(url,data)

```ts
// data service
@Injectable({ providedIn: 'root'})
export class DataService {
  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any>{
    return this.http.post('https://putsreq.com/PWGfyi1Yuo3ND2gC0Vj7',userSettings);
  }
}

// In class
constructor(private dataservice: DataService) { }
onSubmit(form: NgForm): void{
    this.dataservice.postUserSettingsForm(this.userSettings).subscribe({
      next: result => console.log('successfully posted data on server',result),
      error: error => console.log('error', error)
    });
  }



```














