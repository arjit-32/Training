# Code Cheatsheet

## Structure of Program

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
```

## Input/Ouput

```java
// Ouput
System.out.println("Can be anything - "+ variableName);
System.out.print();
System.out.printf();

// Input
import java.util.Scanner;
Scanner sc = new Scanner(System.in);
int n = sc.nextInt(); 
String s = sc.nextLine(); // Whole Line
String s = sc.next(); // 1 word
// Other Functions - nextFloat,nextDouble,nextByte,nextShort,nextLong
```

## Arrays

```java
int[] arr = new int[100];
int[][] matrix = new int[10][10];
int[] arr = {1,2,3,4};

// for each loop
for(int i: arr){ Sopln(i); }

// Loop through 2D array
for(int i=0; i< arr.length;++i){
	for(int j=0;j<arr[i].length;++j){
		//Statment
	}
}

// Methods
Arrays.toString(arr); // Converts array to String
List l = Arrays.asList(arr); // Converts array to arraylist
arrList.toArray(arr); // Convert arraylist to array
Arrays.binarySearch(arr, Key);
Arrays.binarySearch(arr, from, to, Key));
Arrays.equals(arr1, arr2); // Arrays.deepequals(arr1, arr2);
int[] copy = Arrays.copyOf(arr,arr.length);
int[] copy = Arrays.copyOfRange(arr,from,to);
System.arraycopy(src,srcPosition,dest,destPosition,length); // Copies array
Arrays.fill(arr,key); 
Arrays.fill(arr,from,to,key);
Arrays.sort(arr);
Arrays.parallelSort(arr); //faster
Arrays.sort(arr,from,to);
Arrays.sort(arr,Comparator<super T>);
Arrays.mismatch(a1,a2); // 1'st unmatched element index
```

## Strings

```java
char[] c = {'a','e','i','o','u'};
String s = "aeiou";
String s = new String("welcome");

s1.equals(s2);
s1.equalsIgnoreCase(s2);
s1.compareTo(s2); // 0 means equal,+ve means s1> s2, -ve means s2>s1
s3 = s1+s2; // Concatenation
s.substring(0,2); // hello → he
s.length(); 
s.charAt(0);
s.toCharArray();
s.toLowerCase(); 
s.toUpperCase(); 
s.trim();
s.join(":","1","1","2020"); // 1:1:2020
String[] t = s.split("\\s"); // Split atring based on whitespace

```
_StringBuilder Class_

```java
StringBuilder sb = new StringBuilder("arjit");
sb.append(" sharma"); // arjit sharma, appends a string
sb.insert(0,"Mr. "); // Mr. arjit sharma, Insert at specified index
sb.replace(0,1,"Mister"); // Mister. arjit sharma, replace from given begin index to end index
sb.delete(0,7); // arjit sharma
sb.reverse(); 
sb.substring(0,3);
sb.charAt(0);
sb.setCharAt(0,'A');
sb.toString();
sb.getChars(0,4,destArr,3); // Copy char seq from 0 to 4, and add to destArray from 3rd index
sb.codePointAt(0); // Returns unicode of char at given index
sb.codePointBefore(0);
sb.indexOf();
sb.lastIndexOf();
```

_Charachter Class_

```java
char ch='A';
Character.isDigit(ch);
Character.isLetter(ch);  
Character.isLowerCase(ch);  
Character.isUpperCase(ch);  
Character.isWhiteSpace(ch);  
Charachter.isLetterOrDigit(ch);
```

## Date & Time - 
Old way is with java.util.Date & java.util.Calendar
Since java8 we use java.time package

```java
// Getting current date & time
LocalDate.now();
LocalTime.now();
LocalDateTime.now();

// Creating 
LocalDate d1 = LocalDate.of(2021,1,26); // 26 jan 2021
LocalTime t1 = LocalTime.of(9,30,5) // 9:30:05
LocalDateTime dt = LocalDateTime.of(2021,1,26,9,30)

// Manipulating
d1.plusDays(10); // Add 10 days to d1
d1.withYear(2025); // update the year to 2025
d1.minusDays(3);
t1.minusHours(1);
```

## Collections

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

### ArrayList -

Uses dynamic array for storing the elements.

```java
//Declaring ArrayList
ArrayList<String> list = new ArrayList<String>();

//Adding element 
list.add("Arjit");
list.add(1,"Midoriya");

//Adding another collection to Arraylist
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

### LinkedList -

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

### Priority Queue -

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

### HashSet -

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

### LinkedHashSet 
Maintains Insertion Order


### TreeSet
- Basically an implementation of self-balancing tree
- Doesnt allow null elements
- Maintains ascending order

```java
TreeSet<String> t = new TreeSet<>();
t.add(4);
t.add(1);

Iterator i = t.descendingIterator(); // to traverse in desceding order
while(i.hasNext())  System.out.println(i.next());

t.pollFirst(); // returns & removes first(lowest) in TreeSet
t.pollLast(); 
t.descedingSet(); // Reverse Treeset
t.first(); //returns first value
t.last();
t.contains(1);
t.headSet(3); // element less than 3 will be returned
t.tailSet(3); // elements>3 returned 
t.remove(1); 
t.subset(1,5); // elements between 1(inclusive) and 5(exclusive) returned
t.size();
t.lower(3); // returns greatest element in set which is less than 3
t.higher(3); // returns smallest element in set which is greater than 3
```

### Dequeue
- No null elements

```java
Deque<Integer> deque = new ArrayDeque<Integer>();

deque.size(); // size of queue

// Adding elements  
deque.add(2);    
deque.addFirst(1); // add at head
deque.addLast(3); // add at tail
dequeu.offer(); // add at tail

// Removing elements
deque.pop(); // retrieve and remove at head of queue
deque.poll(); // retrieve and remove at head of queue
deque.pollFirst();
deque.popLast();

// Getting elements
deque.getFirst();
deque.getLast();
deque.peek(); // head of queue
deque.peekLast();

// Traversing
Iterator i = deque.iterator();
while (i.hasNext()){
    System.out.print(itr.next() + " ");
}

```

### Hashmap
- Order is not maintained


```java
Map<Integer,String> map=new HashMap<Integer,String>();  
  // Size
  map.size();

  // Add elements to map
  map.put(1,"arjit");  
  map.put(2,"farhan");  

  // Checking if Key present
  map.containsKey(1);

  // Traversing
  for(Map.Entry m : map.entrySet()){  
   System.out.println(m.getKey()+" "+m.getValue());  
  }  
  
  // removing elements
  map.remove(100);
  
  // replacing 
  map.replace(101,"Vijay","Ravi");

```

### LinkedHashMap
Maintains insertion order

### TreeMap
Maintains Ascending order

```java
TreeMap<Integer,String> map=new TreeMap<Integer,String>();    
      map.put(100,"Amit");    
      map.put(102,"Ravi");    

      map.remove(100); // remove element
      
      map.descendingMap(); // descending order
      map.headMap(102); 
      map.containsValue("Amit");
      map.containsKey(100);

      //Traversal
      for (Map.Entry<Integer, String> e : map.entrySet())
            System.out.println(e.getKey() + " " + e.getValue());
```

### Sorting collections

```java
Collections.sort(al);  
Collections.sort(al,Collections.reverseOrder());  
Collections.reverse(al);
```