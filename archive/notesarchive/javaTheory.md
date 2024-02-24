## Operators
Arithmetic(+,-,*,/,%,,++,--)
Relational(==,!=,>,<,>=,<=>)
Assignment(=,+=,-=,*=,/=)
Bitwise(&,|,~)
Logical(&&,||,!,^)
Conditional or Ternary(result = condn?value1:value2)
instanceOf(if(object instanceOf type))

## Data Types

Primitive Data Types -
byte,short,int,long,(float a = -42.3f),double,char,boolean

_Note - Every primitve type has Wrapper Class.Autoboxing & Unboxing converts primitive to object & viceversa.[Integer a = Integer.valueOf(100)]_


Referrence Data Types - 
int[] a = new int[];
String a = "Can be any string"
Classes & Objects

Enums -
Group of named constants. Special class, only difference is enums cannot create objects or extend other classes.
```java
enum Directions{N,S,E,W} // defining

System.out.println(Directions.N); // Using values in enum

for(Directions d: Directions.values()){
	System.out.println(d);
}
```

## Literals

A Literal is the source code representation of a fixed value.

- Boolean Literals : true,false

- Integer Literals : 

```java
long myVariable2 = 42332200000L;
int hexNumber = 0x2F; // 0x represents hexadecimal
int binNumber = 0b10010; // 0b represents binary
```

- Floating Point Literals :
```java
double myDoubleScientific = 3.445e2;// 3.445*10^2
float myFloat = 3.4F;
```

- Charachter & String Literal :
For char literal single quotations are used
For string literal double quotations are used

## Flow Control

```java
if (expression1) {
}
else if(expression2) {
}
else {
}

switch(variable/expression){
case value1:
	//Statements	
	break;
case value2:
	//Statements
	break;
default:
	//default Statements
}

// Looping
for (int i = 0; i < n; ++i) {
}

while(condn){}}

do{
//Statments
}while(condn)

//For each
int arr[] = {3,7,5,-5};
for(int i: arr){
	System.out.println(i); // Prints elements of array
}
```

## Garbage Collection
- Alogorithm used is Mark & Sweep
- Object(is present in heap memory), Referrence(variable that can access Object, present in stack memory)
```java
Car a = new Car(); // a is reference to object
```
- Can call garbage collector using System.gc(); but it is non deterministic.
- Getting Memory present in Heap(int bytes)
```java
 Runtime runtime = Runtime.getRuntime();
        long totalMemory = runtime.totalMemory(); // total right now
		long freeMemory = runtime.freeMemory(); // free memory right now
		long maxMemory = runtime.maxMemory(); // JVM can expand Heap upto this memory
        System.out.println(totalMemory);
```

## Tricky Questions

1. Question - How many objects will be created using below line ?
```java
String s2 = new String("Arjit");
```
Answer - 1 or 2, depends 
If "Arjit" is already present in String Constant Pool(this is present inside heap). 
Create "Arjit" in heap memory outside String Constant Pool.
If not present, create 2 objects, 1 in String Constant Pool and 1 outside it in heap. 
On other hand if we used String Literal method(String s="Arjit"), it only creates in String Constant Pool.

- Strings are stored in String Pool(a memory block witin heap), while using StringBuilder or StringBuffer class stored in Heap.
