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
*Everything apart from primitives is an object*

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

	//Anonymous & self invoking function
	let abc = (function(){
			let x="Hello!";
			console.log(x);
		})();

	//Closure -> when we have acces to variable even when its scope ended
	// x has access to y(which is in a anonymous function)
	let x = (function(){
			let y=9;
			return function(){
					y+=1;
					console.log(y);
				}
		}
	)();

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

# Object Oriented JS(ES-5)

## Making a Class
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

## Prototypes
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

## Inheritance
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

## Object.Create()
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

## Making a Class
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

## Inheritance in ES6
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

## Arrow Functions
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

## Object.Create
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

