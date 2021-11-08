# Basics
DOM represents all page content as objects that can be modified.

BOM(Browser Object Model) represents additional objects provided by browser for working with everything except document.(ex - location,alert)

# JS behind the scenes
JS is hosted in a enviroment typically a web-browser(Chrome,Safari etc), can also be hosted in NodeJs server.

Host has JS engine(Spidermonkey,V8 etc).
Inside JS Engine:
`Parser` sends Abstract Syntax Tree which is used to convert to M/C code 

`Execution context`: Wrapper in which a piece of our code is evaluated.By default it is Global.
Every function gets there own execution context.

`Execution Context Object`: 
Variable Object,Scope Chain,this variable
2 phases of such object: 
1. Creation Phase
	A) Creation of V.O - Argument object containing all arguments that were passed into function. 
	**Hoisting**
	For each function a property is created in V.O pointing to function while for each variable, property is created & set to undefined.

	Function is available to use before declaring & defining it.(Doesnt work for function expression)

	If we use variable before defining it, it shows undefined. BUT if it isnt declared at all then error.

	Ex-1:
	console.log(age); // undefined
	let age=9;

	Ex-2:
	console.log(age); // Error: age is not defined

	B) Creation of Scope chain

	Only function creates a new scope in JS(unlike java ifs,switches etc)

	Lexical scoping: Inner func has access to Outer func variables

	C) Determine value of 'this' variable
	
	In regular function call(no matter where it is), this returns window object.

	Points to whichever object is calling method 

2. Execution Phase
	Code of function that generated the current execution contex

