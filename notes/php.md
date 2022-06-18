# Object Oriented PHP

## Class Creation
Below is given basic class implementation in PHP
__CLASS__ constant returns name of class
Line 8: Constructor Defined with default values set to null
Line 16: Destructor is called at end of the script
Line 30: Object's properties can be accessed using -> keyword

```php
class Student {
//className = __CLASS__;
public $name;
public $roll;
public $class;

//Constructor
function __construct($name=null,$roll=null,$class=null){
    //default set to null so that no error occurs even if user doesn't set all values
    $this->name =$name;
    $this->roll =$roll;
    $this->class =$class;
}

//Destructor
function __destruct(){
echo "Called upon script ending";}

//Method
public function sayHello(){
    return "Hello World!!";
    }
}

//Instantiating Objects
$arjit=new Student("Arjit Sharma",14,"CSE-A");


//Getting & Setting Object's Properties
echo $arjit->roll; //Property does'nt start with $ sign
$arjit->roll="CSE-B";
echo $arjit->sayHello();
```

## Getters and Setters
```php
class User{
private $name;

public function__construct($name){
$this->name=name;
}

public function __get($property){
if(property_exists($this,$property)){
$this->property=$value;
}
return $this;
}

public function __set($property, $value){
if(property_exists($this,$property)){
return $this->property;
}
}

$user1 = new User('Arjit');
echo $user1->__get('name');
$user1->__set('name',"Arjit Sharma");
```

## Constants And Static
Though both are shared by all objects(are class variable)
A constant(const) cannot be changed while a static variable can.
```php
class Student {
const a="5";
static $b="5";
}
echo Student::a;//5
echo Student::$b;//5
Student::a=10;//Error
Student::$b=10;//Changed to 10

Inheritance
extends keyword is used.
Line 13:Child constructor used to call parent constructor.

class Student{
public $name;

public function __construct($name){
    $this->name=$name;
    }
}
class CollegeStudent extends Student{
public $degree;

public function __construct($name,$degree){
    // $this->name=$name; --->this would have worked here
    Student::__construct($name);//Calling parent constructor
    $this->degree=$degree;
    }
}

$student1= new CollegeStudent("Arjit Sharma","B.Tech");
echo "Name : ".$student1->name." Course : ".$student1->degree;
```

## Traits
As inheritance only allows to inherit from 1 class, What if we wanted a particular function in all classes. Use trait.
Traits are used to declare methods that can be used in multiple classes.
```php
trait msg{
public function msg_function(){
    echo "Hello World!";
    }
}
class Welcome{
use msg;
}
$ob=new Welcome();
$ob->msg_function();
```

## Method Overriding
If we don't want a method to be overridden, prefix with final keyword. (Ex: final public function sayHello())

```php
class A{
public function sayHello(){ //Prefix with final keyword so that cant be overridden
    return "Hello from A";
    }
}

class B extends A{
public function sayHello(){
    return "Hello from B";
    }
} 
```

## Abstract Class
absract keyword is used. A class can only inherit from 1 class.

```php
abstract class human{

public function walk(){//Can have non-abstract mehods
    return "Human is walking";
    }
abstract public function sayHello();//Abstract method declare
}

class Indian extends human{

public function sayHello(){//Indian define there implementation of saying hello
    return "Namaste";
    }
}
```

## Interfaces
implements keyword is used. A class can implement multiple interfaces.
```php
interface A { 
function A_method();
}

interface B { 
function B_method();
}

class C implements A,B {

function A_method(){
    return "A's Method";
}

function B_method(){
    return "B's Method";
    } 
}
```
---

# Dependency Injection in PHP
When our class need object of other class.


Suppose we have classes : logger(displays a message)   UserProfile(Needs to use logger's log function)
Line-11 : We make variable $logger in UserProfile point to object of logger class.
Line-15,19,27 : We use $logger to access log function.
3 steps : Initializing Dependency(Line 23),Injecting Dependency(Line 24) and Using Dependency(Line 27).
```php
class logger{
public function log($msg){
    echo "Log : $msg";
  }
}

class UserProfile{
  public $logger;//This variable will store object of logger
  
  public function __construct($logger){
    $this->logger=$logger;//logger variable points to object of logger 
  }  

  public function createUser(){
    $this->logger->log("User Created");//using variable to acces method of logger
  }

  public function deleteUser(){
    $this->logger->log("User Deleted");
  }
}

$logger=new logger();//Initialize dependecy
$profile=new UserProfile($logger);//Inject Dependecy via constructor
$profile->createUser();
$profile->deleteUser();
$profile->logger->log("Hello");//using dependecy
```
---

# Autoloading in PHP
Autoloader is a strategy for finding PHP class or interface and loading it at run time when a class is instantiated. Better than writing multiple require and include as they do not scale well and is a clutter.

Make 2 files ⇒ Greet.php(This is the class file we want to load) and mainFile.php(It will consume/use Greet.php)
Note: Keep file name and class name same.


Greet.php
```php
<?php
class Greet{
    public function sayHello(){
        echo "Hello World From autoload";
    }
}
?>
```
mainFile.php

```php
<?php
spl_autoload_register(function($class){
    require_once "{$class}.php";
});

$ob = new Greet();
$ob->sayHello();//Output : Hello World From autoload
?>
```
---
# PHP - PDO
PDO stands for PHP Data Objects (Object Oriented). It is a PHP Extension to access database.Unlike mysqli it works with multiple databases. There are 3 main Classes are :
⇒ PDO - Connection between PHP and DB
⇒ PDOStatement - Prepared Statement
⇒ PDOException - Represent error raised by PDO

## PDO Basic
We create PDO Object,execute a query and fetch result,either in associated array format(FETCH_ASSOC) or object format(FETCH_OBJ )
Line 11: - Creating PDO Object ( $pdo )
Line 14: - Executing Query using $pdo→query( sql )
Line 17: - Fetching result using fetch() method
Line 18: - As FETCH_ASSOC class is used so we get the query result in associated array format and that is why column 'title' is accessed using array referrencing.
```php
<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "test";

//Set DSN = Data Source Name,describes connection to database
$dsn = "mysql:hosts=".$host.";dbname=".$dbname;

//Creating PDO Instance
$pdo = new PDO($dsn, $user, $password);

//PDO Query
$stmt = $pdo->query("SELECT * FROM posts");

//Fetching Rows in Associated array format
while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    echo $row['title'] . "";
}
?>
```

## Fetching rows in Object Format
PDO::FETCH_OBJ can be used to get query result in form of objects then in order to access columns we will use → symbol
```php
while($row = $stmt->fetch(PDO::FETCH_OBJ)){
    echo $row->title . "";
}
```
## Set FETCH_OBJ as default
After specifying the default format of result we wont need to provide argument in fetch method.
```php
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ)
while($row = $stmt->fetch())//Now this will work
{--}
```

## Prepared Statements
Why use ?
Helps write parametric queries,i.e same query can be used again and again.
Faster
Prevents SQL injections
⇒ Using indexed parameters
```php
$author = "Arjit";
$sql = "SELECT * FROM posts WHERE author = ?";
$stmt = $pdo->prepare($sql);

//array of variables is sent in execute
$stmt->execute([$author]);

//fetchall fetches all result, while fetch gives 1
$posts = $stmt->fetchAll(PDO::FETCH_OBJ);

foreach($posts as $post){
    echo $post->title. "";
}
```
⇒ Using named parameters
```php
$author = "Arjit";
$is_published = true;

$sql = "SELECT * FROM posts WHERE author = :author and is_published = :is_published";
$stmt = $pdo->prepare($sql);

$stmt->execute(['author' => $author,"is_published"=>$is_published]);

$posts = $stmt->fetchAll(PDO::FETCH_OBJ);

foreach($posts as $post){
    echo $post->title. "";
}
```

## Basic Operations in PDO
### Counting no. of rows
```php
$author = "Arjit";
$stmt = $pdo->prepare("SELECT * FROM posts WHERE author = ?");
$stmt->execute([$author]);
$count = $stmt->rowCount();
echo $count;
```
### Inserting
```php
$title = "Post 4";
$body = "This is a post 4";
$author = "Singham";

$sql = "INSERT INTO posts(title,body,author) VALUES(?,?,?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$title,$body,$author]);
echo "Post Added";
```

### Updating
```php
$title = "Post 4 : Updated";
$id = "4";

$sql = "UPDATE posts SET title = ? WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$title,$id]);
echo "Post Updated";
```

### Deleting
```php
$id = "4";

$sql = "DELETE FROM posts WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$id]);
echo "Post Deleted";
```

### Searching
```php
$search = "%title%";
$sql = "SELECT * FROM posts WHERE title LIKE ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$search]);
$posts = $stmt->fetchAll(PDO::FETCH_OBJ);

foreach($posts as $post){
    echo $post->title. "";
}
```
---

# File Handling And Streams

Note :
ftell($file) : Tells where file pointer is
When a file is too big ,u cant read entire file in memory in single go then u need to read it in chunks.
Streams :
A stream is a resource object which exhibits streamable behavior. That is, it can be read from or written to in a linear fashion.
We use Streams to provide data on demand.( Providing data in chunks )

## Opening a file
```php
$file = fopen(__DIR__ . '/empList.txt','r+') or die("Unable to open");
        //r+ : read-write mode and others like,w,r,a
```
## Reading a file

=> Read 1 line
```php
$employee = fgets($file);
echo $employee;
```
=> Read whole file
```php
//Reading in 1 call(won't work for big files)
$fileData = fread($file,filesize($file));

//Reading line by line
while(!feof($file)){
    echo fgets($file) . "<br>";
}
```
=> Read file to string(using file_get_contents() )
```php
$text = file_get_contents("files/my_file.txt");
echo $text;
```

## Writing to a file
```php
$newFile = fopen("newFile.txt", "w") or die("Unable to open file");
$line = "Hello World, Add this line to file";
fwrite($newFile,$line);
```
## Deleting a File
```php
unlink("file.txt");
```
## Stream Wrappers
Tells the stream how to handle specific protocols. ex-https,ftp,zip

## Stream Context
Set of parameters or wrapper specific options
stream_context_create() : Creates and returns a stream context with any options supplied in options preset.
```php
<?php
$opts = array(
'http'=>array(
'method'=>"GET",
'header'=>"Accept-language: en\r\n" .
"Cookie: foo=bar\r\n"
)
);

$context = stream_context_create($opts); ?>
```
---

# DOMDocument Class in PHP
Represents an entire HTML or XML document. It serves as the root of the document tree. Helps in parsing and creating xml,html

## Loading HTML
file_get_contents(URL): Converts html content in URL to String.
loadHTML(file_get_contents(URL)): Loading HTML string with DomDocument object.
```php
doc=new DomDocument();
//convert html of a URL to string using file_get_contents
//loading HTML string
$doc->loadHTML(file_get_contents(URL));
```
## Function to get HTML contents
```php
$doc->getElementsById("idName");

//Gets all anchor tags inside Document
$doc->getElementsByTagName("a");

//Gets all src attributes in img in whole doc
$doc->getElementsByTagName("img")->getAttribute('src');
```
## Creating and Adding elements in HTML Doc
```php
$div = doc->createElement('div');//create a div
$div_clone = $div->cloneNode();//Cloning div to div_clone
$doc->appendChild($div);//Appending div to Document
$doc->saveHTML();//Saves document
```
## Traversing all entries of a element
item() : Gets node at certain index within DOMNodeList object.
nodeValue : Gets value at that node.
```php
<?php
$doc = new DOMDocument;
$doc->load('arjit.html');

$items = $doc->getElementsByTagName('a');

for ($i = 0; $i < $items->length; $i++) {
    echo $items->item($i)->nodeValue . "\n";
}
/*
foreach ($items as $item) {
    echo $item->nodeValue . "\n";
}
*/
```
?>
