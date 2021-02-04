### **Structure of Program**

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
```

### **Data Types**

 **- Primitive Data Types**

byte(-128 to 127)

short(-32768 to 32767)

int

long

float a = -42.3f

double

char

boolean

 **- Strings**

String a = "Can be any string"

### Literals

A Literal is the source code representation of a fixed value.

Boolean Literals - true,false

Integer Literals - 

```java
long myVariable2 = 42332200000L;
int hexNumber = 0x2F; // 0x represents hexadecimal
int binNumber = 0b10010; // 0b represents binary
```

Floating Point Literals - 

```java
double myDoubleScientific = 3.445e2;// 3.445*10^2
float myFloat = 3.4F;
```

Charachter & String Literal -

For char literal single quotations are used

For string literal double quotations are used

### Input/Ouput

```java
System.out.println("Can be anything - "+ variableName);
System.out.print();
System.out.printf();
```

```java
import java.util.Scanner;
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
float n = sc.nextFloat();
double n = sc.nextDouble();
byte n = sc.nextByte();
short n = sc.nextShort();
long n = sc.nextLong();

String s = sc.nextLine(); // Whole Line
String s = sc.next(); // 1 word

```

### Flow Control

```java
if (expression1) {
}
else if(expression2) {
}
else {
}
```

```java
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
```

**Looping**

```java
for (int i = 0; i < n; ++i) {
}

while(condn){
}

do{
//Statments
}while(condn)

//For each
int arr[] = {3,7,5,-5};
for(int i: arr){
	System.out.println(i); // Prints elements of array
}
```

**Loop control** 

```java
break;
continue;
```

### Utility Functions

```jsx
Math.max(5,3);
```

### Arrays

```java
int[] arr = new int[100];
int[][] matrix = new int[10][10];
int[] arr = {1,2,3,4};
```

**Loop through 2D array**

```java
for(int i=0; i< arr.length;++i){
	for(int j=0;j<arr[i].length;++j){
		//Statment
	}
}
```

**Methods**

```java
System.arraycopy(src,srcPosition,dest,destPosition,length); // Copies array
Arrays.toString(arr); // Converts array to String
List l = Arrays.asList(arr); // Converts array to list
Arrays.binarySearch(arr, Key);
Arrays.binarySearch(arr, 1, 3, Key));
Arrays.equals(arr1, arr2);
Arrays.sort(arr);
```

### Strings

char[] c = {'a','e','i','o','u'};

String s = "aeiou";

String s = new String("welcome");

**Methods**

s1.equals(s2);

s1.equalsIgnoreCase(s2);

s1.compareTo(s2); // 0 means equal,+ve means s1> s2, -ve means s2>s1

s3 = s1+s2; // Concatenation

s.substring(0,2); // hello → he

str.length(); 

str.charAt(0);

## Tricks

- Returning 2 values from a function

## Java Collections Tutorial

Collection is a framework(set of classes and interfaces) that provides architecture to store and manipulate the group of objects.

Iterable → Collections → List,Queue,Set

Iterator Interface

```java
public boolean hasNext() //returns true if iterator has more elements
public Object next() // returns element and moves cursor pointer to next element
public void remove() // removes last element used by iterator
```

Collections Interface

```java
public boolean add(E e)
public boolean addAll(Collection<?> c)
public boolean remove(Object element)
public boolean removeAll(Collection<?> c)

public boolean contains(Object element)
public boolean containsAll(Collection<?> c)

//Other utility methods
public int size() // list.size();
public void clear() // clears a collection
public boolean isEmpty() //Checks if collection is empty
public Iterator iterator() // returns a iterator
public Object[] toArray()
```

List Interface

**ArrayList -** 

Uses dynamic array for storing the elements.

```java
//Declaring ArrayList
ArrayList<String> list = new ArrayList<String>();

//Adding element 
list.add("Arjit");
list.add(1,"Midoriya");
list.add("Narruto");

//Adding another collection to Arraylist
ArrayList<String> temp = new ArrayList<String>();
temp.add("Yolo");
temp.add("Holo");
list.addAll(temp);

//Removing elements
list.remove("Narruto");
list.remove(0);
list.removeAll(temp); //Remove all new elements from Arraylist
list.removeIf(str -> str.contains("Arjit")); //Remove if Arjit is present

//Traversing Arraylist using Iterator
Iterator i = list.iterator();
while(i.hasNext()){ // Check if iterator has next element
System.out.println(i.next()); // Printing element and move to next
}

//Traversing ArrayList using For-each loop
for(String i: list){
System.out.println(i);
}

//Traversing Arraylist using for loop
for(int i=0;i<list.size();++i){
System.out.println(list.get(i));
}

//Accessing elements
String s = list.get(1);

//Changing elments
list.set(1,"Kaneki");

//Sorting
Collections.sort(list); //String Arraylist is sorted alphabetically

//ArrayList to Array conversion
String[] ar = new String[list.size()];
list.toArray(ar);

//Important Methods
List<String> tempList = list.subList(2,4);
list.contains(Object o);// returns index of 1st occurence of element
list.lastIndexOf(Object o);// returns last occurence of element or -1 if not present
list.isEmpty(); // Returns True or False
Object[] ob = list.toArray();
```

**LinkedList -**

Uses Doubly LinkedList.

Can be used as Stack or Queue

```java
LinkedList<String> list = new LinkedList<String>();

//Adding element
list.add("A");
list.add(1,"B");
list.addLast("C");
list.addFirst("AA");

//Removing element
list.remove("B");
list.remove(2);
list.removeFirst();
list.removeLast();
```

**Priority Queue**

The head of this queue is the least element with respect to the specified ordering

```java
PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(); // Min Heap
PriorityQueue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder()); // Max Heap
pQueue.add(10); 
pQueue.add(20); 
pQueue.add(15); 
System.out.println(pQueue); // [10,15,20], Prints queue
pQueue.peek(); //10, Lookup top element
pQueue.poll(); //10 returned, Remove top element
pQueue.contains(5); // Return true or false
pQueue.clear(); // Deletes all element from queue
pQueue.remove(10); // Removes 10 from queue

//Converting to Array
Object[] arr = pQueue.toArray();

//Iterating PQ
Iterator iterator = pq.iterator(); 
while (iterator.hasNext()) { 
    System.out.print(iterator.next() + " "); 
}

```

**HashSet**

- Uses a hash table for storage.
- Contains unique elements only.
- Doesn't maintain the insertion order.

```java
HashSet<Integer> set=new HashSet();
set.add(1);    
set.add(2);    
set.add(3);

set.remove(1);
set.addAll(set1); // set1 is another HashSet
set.removeAll(set1);
set.clear();

// Another collection to Hashset
ArrayList<Integer> list=new ArrayList<Integer>();
HashSet<Integer> set=new HashSet(list);

//Printing
Iterator<Integer> itr=set.iterator();  
while(itr.hasNext()){  
   System.out.println(itr.next());  
}
```