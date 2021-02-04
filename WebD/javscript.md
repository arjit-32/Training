# Basics

## Logging to console
	console.log("Hello World");
	console.error("Yellow");
	console.warn("Warning Mssg");
	//Gives time taken between execution
	console.time("note time");
	    console.log("heck yea");
	    console.log("heck yea");
	    console.log("heck yea");
	    console.log("heck yea");
	    console.log("heck yea");
	console.timeEnd("note time");

## Variables & constants
`var` and `let`(newer way) keyword are used to initialize varibales.
`const` keyword is used to assign constant. Constants cant be changed.

	//Initializing variables
	var name = "arjit";
	let age = 18;

	//Constants
	const a = 10;
	a = 20; //Cannot do ,Error

	//Cannot change object, but can change property of objects
	const person = {
	    name: "John",
	    age: 20
	}
	person.name = "Arjit"; //Possible

	//Not Possbile reassigning const object
	person = {
	    name: "XYZ",
	    age:45
	}

## Data Types
JS is a dynamically typed language.
`typeof` keyword is used to know data type of variable.

- Primitive DTs:
	
		String : const name = "John Doe";
		Number : const age = 18;
		Boolean : const isValid = true;
		Null : const a = null;
		//typeof null gives object,a bug in language
		Undefined : let test;
		Symbols : const sym = Symbol();   

- Reference DTs: 

		Arrays : const names = ['Arjit','Adam']
		Object Literals : const person = { name:"Arjit", age:19}
		Functions : function myFunc(){}
		Dates : const today = new Date(); 

## Type Conversion

	let a;
	//Number to String:
	a = String(89);
	a = (90).toString();

	//Date to String
	a = String(new Date());

	//String to Number
	a = Number('5');
	a = Number("Hello");//NaN = Not a Number
	a = parseInt('100.30');//100
	a = parseFloat('100.30');
	//toFixed specifies decimal places
	console.log(a.toFixed(2));//100.30

## Language Constructs
	
	for(let i=0;i<10;++i){
		console.log(i);
	}

	let i=0;
	while(i<10){
		console.log(i);
		++i;
	}

	const x=10;
	if(x == 10){
		console.log('x is 10');
	}else if(x>10){
		console.log('x is greater than 10');
	}else{
		console.log('x is less than 10');
	}

	&&(and), ||(or), !(not)
	Ternary operator -> let ans = x>10?'yes':'no';

	switch(x){
		case 1: //Statement;
		break;
		case 2: //Statement;
		break;
	}


## Functions
`function` Keyword is used to create a function.

Function Exprn: We can deal with function as a value. Assign it to variables.
Callback Funtion: We can pass function as argument and can call back later if needed.

	function name(p1, p2, p3) {
	    //Code
	}

	//Function Expression
	let yo = function(){
	    //Code
	};

	//Callback Functions
	function yes(){ alert("Yes"); }
	function no(){ alert("No"); }
	function ask(question,yes,no){
	    //func yes() and no() will be passed in parameter
	    if(confirm(ques))
	        yes();
	    else
	        no();
	}
	ask("Do you agree Sire?",yes,no);

	// Arrow function
	const res = (a=1,b=1)=> a+b; //no need to write return also
	console.log((res(10,10));


## Strings
	let a = "10";//double quotes 
	let b = '10';//single quotes
	let name = new String("Arjit Sharma");//Strings can be objects 

	//Concatenation
	let c= 'Arjit' + 'Sharma';
	let c= `My name is ${name} and I am ${age}`;//template string concatenation

	//Finding Length
	let len = name.length;

	//Comparing Strings
	let a="Arjit"
	console.log(a.localeCompare("Arjit"));//returns 0 if both are equal

	//Finding position of substring in a String 
	let pos1 = name.indexOf("Sharma");//1st occurence
	let posLast = name.lastIndexOf("a");//last occurence of 'a' 

	//Slicing
	let str = "Arjit Sharma is my name.";
	let name = str.slice(0,5);//1st parameter inclusive,2nd exclusive

	//Replacing
	let name = str.replace("Arjit","Astitva");

	//To uppercase 
	let text1 = "Hello World!";     
	let text2 = text1.toUpperCase();

	//Accessing characthers in a string
	str.charAt(0);
	str.charCodeAt(0);//returns unicode charachter at specified position
	str[0];

	//Converting String to Arrays
	str.split(" ");//Splits string on basis of whitespace
	let text = "HELLO";
	text.split("");// Splits in Charachters


## Arrays
	let names = [
	  "Arjit",
	  "Ananay",
	  "Samay"
	];

	let names = new Array("Arjit", "Ananay", "Samay");

	//Length of Array            
	let x = names.length; 

	//Sorting Array
	let y = names.sort();

	//Loop through arrays
	for(let i=0;i<names.length;++i){
		console.log(names[i]);
	}

	for(let name of names){
		console.log(name);
	}

	//forEach method
	names.forEach(function (val,index){
	    console.log(val);
	});

	//map-> creates a new array
	const LengthOfNames= names.map(function(name){
			return name.length;
		}); 

	//filter->filter & create a new array based on a condn
	const NamesStartingWith_A= names.filter(function(name){
		return (name.charAt(0).localeCompare("A")==0) 
		});

	//Adding and Removing Element
	names.push("Monty");//Adds to last position
	names.pop();//Removes last element

	names.shift();//Removes 1st element
	names.unshift("NewItem");//Adds to 1st position and shifts rest

	//Arrays to Strings
	names.toString();//Arjit,Anany,Samay,Monty
	names.join(" # ");//Arjit#Ananay#Samay#Monty


## Object Literal
		const person={
			firstName: 'Arjit',
			lastName: 'Sharma',
			age: 30,
			skills: ['C','Java','Python'],
			address: {
				street: "Shanti Vihar",
				city: "Dehradun",
				state: "UK"
			}
		}

		// Adding properties 
		person.email = 'arjitsharma@gmail.com';

		//getting values corresponding to keys
		console.log(person.firsName);
		console.log(person.skills[1]); // Java

		//looping through object
		for (const property in person) {
			console.log(`${property}: ${person[property]}`);
		}

		//Destructuring -> pulling keys out of object & making them variables
		const {firstName, lastName, address: {city}} = person;
		console.log(firstName); // Arjit
		console.log(city); // Dehradun
---

# DOM Manipulation

## Introduction

	val = document;
	val = document.all;
	val = document.all[2];
	val = document.all.length;//counts all elements in dom
	val = document.head;
	val = document.body;
	val = document.doctype;
	val = document.domain;
	val = document.URL;
	val = document.characterSet;
	val = document.contentType;

	val = document.forms;//Return all forms in a document
	val = document.forms[0];//1st form 
	val = document.forms[0].method;
	val = document.forms[0].action;

	val = document.links;//Returns all links
	val = document.links[0];

	val = document.images;

	val = document.scripts;

## Selecting Elements

`getElementById` , `getElementByClassName` , `getElementByTag` are used to select elements from the DOM.

	document.getElementById("task-title");
	//Gives class Name = "something" of element with id = "task-title"
	document.getElementById("task-title").className="something";
	//Can also store in a variable
	const tasktitle = document.getElementById("task-title");

	const items = document.getElementsByClassName("collection-item");
	items[0].style.color = "red";

	const li = document.getElementsByTagName("li");
	console.log(li[0]);

## Query Selector
General function to select class, id or tag.

	document.querySelector("#task-title");//Gets id 
	document.querySelector(".card-title");//Gets class
	document.querySelector("h3");//Gets 1st h3 in doc
	//Gets all list items in ul
	document.querySelector("ul li").style.color = "blue";

	//Get all ul with class name "collection-item"
	const listItems = document.querySelector("ul").getElementsByClassName("collection-item");

	//querySelectorAll
	const item = document.querySelectorAll('ul.collection li.collection-item');
	//ul with class of collection and li in ul with class of collection-item selected

## Converting HTML collection to Array

	let li = document.getElementByTagName("li");
	li = Array.from(li);
	li.reverse();//Works
	li.forEach(function(li){
	    console.log(li);
	});

## Changing Styles

	document.getElementById("task-title").style.background = "#333";
	document.getElementById("task-title").style.color = "#fff";
	document.getElementById("task-title").style.display = "none";

## Changing Content

	document.getElementById("task-title").textContent = "New text";
	document.getElementById("task-title").innerText = "My Tasks";
	document.getElementById("task-title").innerHTML = "<span>Hello";

## Classes and Attributes

	const firstLi = document.querySelector("li:first-child");
	const link = firstLi.children[0];

	let x;
	x = link.className;//Classes in string format 

	x = link.classList;//Array of classes
	x = link.classList[0];

	link.classList.add("test");
	link.classList.remove("test");


	x = link.hasAttribute("href");
	x = link.getAttribute("href");
	x = link.setAttribute("href","http://google.com");
	link.removeAttribute("href");

## Traversing the DOM

	let x;
	const list = document.querySelector("ul.collection");
	const listItem = document.querySelector("li.collection-item:first-child");

	//Getting Child Node

	x = list.childNode;//Returns Node list .We get children of ul(Also include Text nodes)
	x = list.children;//Returns Html collection .We get children of ul(without text nodes)

	x = list.childNode[0].nodeName;
	x = list.childNode[3].nodeType;

	//Node Type : 
	// 1 - Element
	// 2 - Attribute
	// 3 - Text node
	// 8 - Comment
	// 9 - Document itself
	// 10 - Doctype

	//Getting 1st child
	x = list.firstChild;//All node types included
	x = list.fistElementChild;//Only 1st html element returned

	//Getting Last Child
	x = list.lastChild;
	x = list.lastElementChild;

	//Counting total child elements
	x = list.childElementCount;

	//Getting children of children
	x = list.children[3].children;//returns li in ul then returns a tag in that li
	x = list.children[3].children[0].id="test-link";//Return a tag with id of test-link in li of ul

	//Getting parent Node
	x = listItem.parentNode;//All node type
	x = listItem.parentElement;//Only html element

	//Parent of parent
	x = listItem.parentElement.parentElement;

	//Get next Siblings
	x = listItem.nextSibling;
	x = listItem.nextElementSibling;
	x = listItem.nextElementSibling.nextElementSibling;

	//Get previous Sibling
	x = listItem.previousSibling;
	x = listItem.previousElementSibling.previousElementSibling;

## Creating & Adding Elements
Creating - `createElement`
Adding Element to DOM -
`appendChild` : li.appendChild(const)
`insertBefore` : card.insertBefore(newdiv,card.firstChild)

	<li class="collection-item">Hello World <a><i class = "fa fa-remove"></a></li>

	//Creating li tag
	const li = document.createElement("li");
	li.className = "collection-item";//Added class name to li
	li.id = "new-item"//Added id
	li.setAttribute("title","New Item")//Added title attribute to li

	//Adding a tag in li --> <li> <a></a> </li>
	const link = document.createElement("a");
	link.className = "delete-item secondary-content";
	link.innerHTML = '<i class = "fa fa-remove"></i>';
	li.appendChild(link);

	//Adding text node to li
	li.appendChild(document.createTextNode("hello World"));//Inserting Text node inside li

	//Appending this li tag in ul with class collection
	document.querySelector("ul.collection").appendChild(li);

## Removing/Replacing Elements

	const newHeading = document.createElement("h2");
	newHeading.id="task-title";
	newHeading.appendChild(document.createTextNode("Task list"));

	const oldHeading = document.getElementById("task-title");
	const cardAction = document.querySelector(".card-action");

	cardAction.replaceChild(newHeading, oldHeading);

	//Remove Element
	const lis = document.querySelectorAll("li");
	const list = document.querySelector("ul");

	lis[0].remove(); 

	list.removeChild(lis[3]);

## Event Listeners

	document.querySelector('.clear-task').addEventListener('click',
	function(e){
	    console.log("button clicked");
	    //e.preventDefault();
	});

	document.querySelector('.clear-task').addEventListener('click',onClick);

	function onClick(e){
	    console.log("button clicked");
	}

	document.querySelector('.clear-task').addEventListener('click',onClick);

	function onClick(e){

	    //Event Target Element
	    val = e.target;
	    val = e.target.id;
	    val = e.target.classList;

	    //Change Text in button on click
	    e.target.innerText("Hello");

	    //Getting Timestamp on clicking
	    val = e.timeStamp;

	    //Getting Event Type
	    val = e.type;

	    //Coords event relative to window
	    val = e.clientY;
	    val = e.clientX;

	    //Coords event relative to element
	    val = e.offsetY;
	    val = e.offsetX;

	    console.log("button clicked");
	}

## Mouse Events

	/*dblclick
	mousedown
	mouseup
	mouseenter
	mouseleave
	mouseover
	mouseout 
	mousemove
	*/
	btn = document.querySelector('.btn');

	btn.addEventListener('click',runEvent);
	function runEvent(e){
	    console.log(`Event Type : ${e.type}`);
	}

## Keyboard Events

	/* keyup
	keypress - General keypress
	focus - Focus on input field
	blur - focus outside input field
	cut - Anything is cut from input field
	paste - Anything pasted to input field
	input - general input field...anything we do with input fires this event
	*/

	const form = document.querySelector('form');

	const taskinput = document.getElementById('task');

	form.addEventListener("submit", formEvent);

	function formEvent(e){
	    console.log(`EVENT TYPE: ${e.type}`);
	    
	    //log value entered in input field of form
	    console.log(taskInput.value);


	    //e.preventDefault();
	}

	taskInput.addEventListener("keydown", inputEvent);

	function inputEvent(e){
	    console.log(e.target.value);//Every letter we type output to console
	}

## Local & Session Storage

	//Set Local Storage 
	localStorage.setItem('name','John');

	//Set Session Storage
	sessionStorage.setItem('name','Beth');

	//Deleting
	localStorage.removeItem('name');
	localStorage.clear()

	//Getting from Storage
	const name = localStorage.getItem('name');

	//Example From TaskList app:
	function storeTaskInLocalStorage(task) {
	    let tasks;
	    if (localStorage.getItem('tasks') === null) {
	        tasks = [];
	    } else { //Parse into JSON from string.
	        tasks = JSON.parse(localStorage.getItem('tasks'));
	    }

	    tasks.push(task);
	    
	    //Convert from JSON to string as local storage only stores Strings 
	    localStorage.setItem('tasks', JSON.stringify(tasks));
	}

# Object Oriented JS(ES-5)

## MAKING A CLASS

	function Person(name, age){
	this.name = name;
	this.age = age;

	this.canVote = function(){
	if (age>18) 
	return true 
	else
	return false; 
	}
	}

	const arjit = new Person ('Arjit',12);

## PROTOTYPES

	//Object.prototype
	//Person.prototype


	function Person(name, age){
	    this.name = name;
	    this.age = age;
	}
	//Because canVote is Common , move it to protoype
	Person.prototype.canVote = function(){
	        if (age>18) 
	            return true 
	        else
	            return false; 
	    }
	//Protoype function to change age
	Person.prototype.changeAge = function(age){
	        this.age = age; 
	    }

	const john = new Person('John',10);
	console.log(john.canVote());//returns false

	john.changeAge(19);
	console.log(john.canVote());//returns true

	//Using Object Property
	console.log(john.hasOwnProperty('name'));//true
	console.log(john.hasOwnProperty('canVote'));//false

## INHERITANCE

	function Person(firstName, lastName){
	    this.firstName = firstName;
	    this.lastName = lastName;
	}

	Person.prototype.greeting = function(){
	    return `Hello ${this.firstName} ${this.lastName}`;
	}


	//Customer Constructor
	function Customer(firstName, lastName, phone , membership){
	    Person.call(this,firstName,lastName);

	    this.phone = phone;
	    this.membership = membership;
	}

	//Inherit Person protoype methods
	Customer.protoype = Object.create(Person.prototype);
	Customer.protoype.constructor = Customer;



	const customer1 = new Customer('Tanmay','Bisht','9056202014','Premium');

	//Overriding greeting prototype method of Person
	Customer.prototype.greeting = function(){
	    return `Hello customer ${firstName} ${lastName} Welcome to company `
	}

## OBJECT.CREATE

	Object.create() methord is used to create a new object with the specified prototype object and properties

	const personPrototype = {
	    greeting: function(){
	        return `Hello ${this.firstName} ${this.lastName}`;
	    },
	    getsMarried: function(newLastName){
	        this.lastName = newLastName;
	    }
	}

	const mary = Object.create(personPrototype);
	mary.firstName ='Mary';
	mary.lastName = 'Poppins';
	mary.age = 26;

	mary.getsMarried('Marzzi');
	console.log(mary.greeting);

	const arjit = Object.create(personPrototype,{
	    firstName: {value: 'Arjit'},
	    lastName : {value: 'Sharma'},
	    age: {value: 19}
	});

	console.log(arjit.greeting);

# ES-6

## MAKING A CLASS

	class Person{
	constructor(firstName, lastName){
	    this.firstName = firstName;
	    this.lastName = lastName;
	}

	greeting(){
	    return `Hello there ${this.firstName} ${this.lastName}`;
	}

	//Using Static methods
	static walk(){
	    return 'Person is Walking';
		}    
	}

	const arjit = new Person('Arjit','Sharma');

	console.log(Person.walk());

##INHERITANCE IN ES6

	class Person{
	    constructor(firstName, lastName){
	        this.firstName = firstName;
	        this.lastName = lastName;
	    }

	    greeting(){
	        return `Hello there ${this.firstName} ${this.lastName}`;
	    }
	}

	class Customer extends Person{
	    constructor(firstName, lastName, phone, membership){
	        super(firstName,lastName);
	        this.phone = phone;
	        this.membership = membership;
	    }
	}

	const John = new Customer('John','Doe','970259022','Premium');

	console.log(john.greeting());

## ARROW FUNCTIONS

	// const sayHello = function(){
	//     console.log('Hello');
	// }

	const sayHello = () => console.log('Hello');

	//To return a string no need to use return keyword.One Line Returns
	const sayHello =() => 'Hello';
	console.log(sayHello());

	//To return object literal wrap object in parenthesis,so that it doesnt consider it as function body
	const sayHello = () => ({msg: 'Hello'});
	console.log(sayHello());

	//Single parameters passed in function dont need parenthesis
	const sayHello = (name) => console.log(`Hello ${name}`);
	const sayHello = name => console.log(`Hello ${name}`);

	//1 or more parenthesis
	const sayHello = (Fname,Lname) => console.log(`Hello ${Fname} ${Lname}`);


	//Finding length of names in array using arrow func
	const users = ['Nathan','John','Williams'];
	//const nameLen = users.map(function(name){
	//    return name.length;
	//})
	const nameLen = users.map(name =>name.length);

## OBJECT.CREATE
Object.create() methord is used to create a new object with the specified prototype object and properties

	const personPrototype = {
	    greeting: function(){
	        return `Hello ${this.firstName} ${this.lastName}`;
	    },
	    getsMarried: function(newLastName){
	        this.lastName = newLastName;
	    }
	}

	const mary = Object.create(personPrototype);
	mary.firstName ='Mary';
	mary.lastName = 'Poppins';
	mary.age = 26;

	mary.getsMarried('Marzzi');
	console.log(mary.greeting);

	const arjit = Object.create(personPrototype,{
	    firstName: {value: 'Arjit'},
	    lastName : {value: 'Sharma'},
	    age: {value: 19}
	});

	console.log(arjit.greeting);
