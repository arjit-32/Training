## Spring Overview
- Simplify Java Enterprise Development
- Lightweight dev with java POJOs(better than EJBs that were used in J2EE)
- Dependency Injection 
- Minimise boilerplate code
---

## SpringBoot Overview
- Enable building production ready appln quickly.
- Provide common non-functional features(embedded servers,metrics,health checks,externalized config)
- Has starter projects(web,jpa etc)
- Has embedded servers(tomcat,jetty etc).i.e, can bundle server with appln
- It has Autoconfiguration - looks at Frameworks in classpath & existing configuration and then configures it for us.

**NOTE - To pick things from other package use ComponentScan - @ComponentScan("com.spring.....")**


## IOC & DI
- Using Object Factory for construction & management of objects, so that it is easily configurable and loosely coupled.
*IOC-Create and Manage objects,DI-Inject objects dependencies*
- Two ways to inject - Setter injection & constructor injection
- Framework that provides IOC is called IOC Container.
- Spring has 2 implementation of IOC container - ApplnContext(has more features like i18n, AOP), BeanFactory(Memory efficient)
Example - 
_DiExampleAppln.java_
```java
@SpringBootApplication
public class DiExampleApplication {
	public static void main(String[] args) {
	ApplicationContext apx=SpringApplication.run(DiExampleApplication.class, args);
	binarySearch b = apx.getBean(binarySearch.class);
	b.binarySearchMethod();
	}
}
```

_binarySearch.java_
```java
@Component
public class binarySearch {
	@Autowired
	sort s;
	binarySearch(sort s){ //autowiring by type
		this.s=s;
	}
	public void binarySearchMethod() {
	s.sortmethod();
	System.out.println("Binary searched");
	}	
}
```

_bubbleSort.java_
```java
@Component
public class bubbleSort{
	@Override
	public void sortmethod() {
		System.out.println("Bubble sorted");
	}
}
```
## Autowiring
- Autowiring can be done in 2 ways:
    1. ByType : done automatically,use a constructor
    2. ByName : variable name is kept same as class name to specify particular class

Note - Autowiring resolution can be done by adding @Primary or @Qualifier or using ByName
---

## Scope of Bean
1. singleton: One instance per Spring Context *(By default)*
2. prototype: New bean whenver requested *(Use @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE))*
Whenever a dependency of a bean we are trying to get uses Prototype scope while the parent doesnt, then on dependency bean we should use proxy.
*(@Scope(value=ConfigurableBeanFactory.SCOPE_PROTOTYPE,proxyMode=ScopedProxyMode.TARGET_CLASS))*
3. request: One bean per HTTP request
4. session: One bean per HTTP session
5. global
---

## Lifecycle of Bean
- *@PostConstruct* - This method runs just after bean is created.
- *@PreDestroy* - Runs just before bean is destroyed
---

## Junit
- Junit framework can be used for automation testing in CI/CD pipeline.
- Junit methods - assertTrue(condn),assertFalse(condn),assertEquals(expected,actual),assertNull(),assertArrayEquals(expected,actual)
- Junit annotations - @Test,@Before(runs before every test),@After,@BeforeClass,@AfterClass.

```java
@Test

	void test_for_both_positive() {
		sample s = new sample(); // we wanna test sample class's add method
		assertEquals(2,s.add(1,1));
	}
```
---

## Mockito
- How to test a piece of code without implementing and testing its dependencies.
- Without mockito we will have to create a stub, but problem is for different cases we have to create different stubs hence Mockito is used.
Example - 
We have Data which is dependent on DataService, so we mock DataService.
```java
@Test
void Test(){
	DataService dataservicemock = mock(DataService.class);
	when(dataservicemock.retrieveAllData()).thenReturn(new int[] {-20,-40,-2,-19}); //when this function is called return this array
	Data ob = new Data(dataservicemock); // injecting using constructor injection
	int res = ob.findGreatest();
	assertEquals(-2,res);
}
```
- Can also use *@RunWith(MockitoJUnitRunner.class),@Mock,@InjectMocks*.
Example - 
```java
@RunWith(MockitoJUnitRunner.class)
class test_Data {
	@Mock
	DataService dataservicemock;

	@InjectMocks
	Data ob;

	@Test
	void test1() {
		when(dataservicemock.retrieveAllData()).thenReturn(new int[] {20,40,2,19});
		int res = ob.findGreatest();
		assertEquals(40,res);
	}
}
```

## Spring AOP
- AOP is approach for implementing cross cutting concerns(some concerns which are in more than 1 layer, like security)
- In given below code, this method will run before execution any class in aopExample.business, this way it can be used to pre-process before running a service. Ex- checking user authentication before service classes.
```java
@Aspect
@Configuration
public class aspect {	
	@Before("execution(* aop_Example.business.*(..))")
	public void checkIfDataIsClean(){
		logger.info("Checking if data is clean");
	}
}
```

## Spring Databases
[Example](https://github.com/arjitsharma32/MiniProjects/tree/main/course-work/spring-in28min%26rest%26mvc/SpringBasics/DIExample/src/main/java)
### Basic structure
h2 is a in-memory DB.(Alive only till appl is running)

- Add following properties in application.properties file
```java
spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true
```

- Create schema.sql in resources, can create table. This will run as soon as appln loads.

- Create a DAO and Entity package. DAO will contain queries, while entity has class that will map to Database table.

### Spring JDBC
JdbcTemplate class is provided by spring to make working with JDBC easier

1. _query_ function is used for Reading data

```java
// All of this code should be in DAO class
JdbcTemplate ob;

ob.query("Select * from person",new BeanPropertyRowMapper<Person>(Person.class)) // Person is a class

// If single Object is being returned
ob.queryForObject("Select * from person where id=?", new BeanPropertyRowMapper<Person>(Person.class), new Object[] {id}); // 3rd parameter(new Object) is used to put values in PreparedStatement
```

2. Use _update_ for Insert,Update & Delete
```java
ob.update("DELETE FROM person WHERE id=?", new Object[] {id});
```

__Note -__
_BeanPropertyRowMapper_ is used when our Entity class has same structure as table

Custom Rowmapper is used when data coming from table does'nt match with our bean
```java
// Custom RowMapper can be used in place of BeanProperyRowMapper
	class PersonRowMapper implements RowMapper<Person>{
		@Override
		public Person mapRow(ResultSet rs, int rowNum) throws SQLException {
			Person p = new Person();
			p.setId(rs.getInt("id"));
			p.setName(rs.getString("name"));
			return p;
		}
	}
```

### JPA
- Writing queries becomes complex in JDBC. So instead of mapping queries, why not map Entity to row in the table.
- Jpa is a iterface, hibernate(ORM framework) is a framework that implements Jpa
- We do not need to use schema.sql to create table while using JPA, Table is automatically created on defining Entity

_Entity class_
```java
@Entity
public class Person {
	@Id
	@GeneratedValue
	int id;
	String name;
	// Constructor,Getters,Setters
}
```
_PersonJpaRepository_
```java
@Repository
@Transactional
public class PersonJpaRepository{
	@PersistenceContext // All operations in session are stored in it
	EntityManager em; // Manages entities, it is interface to persistenceContext
	//Read
	public Person findById(int id) {
		return em.find(Person.class, id);
	}
	
	//Insert and update, both are done by merge
	public Person insertOrUpdate(Person p) {
		return entityManager.merge(p);
	}
}
```

### Spring Data JPA

Makes working with Jpa even easier.
Just define a interface extending JpaRepository class.

```java
public interface PersonSpringDataRepository extends JpaRepository<Person,Integer>{ //1st arg class, 2nd arg type of Primary key
}
```

Now we can @Autowired it in Main application and use methods like save,findById,findAll

## Spring MVC
Used to build web appln with Model-View-Controller pattern.
Dispatcher servlet (a class) is used to recieve incoming request & map to right resource.

- Model

_Entity_
```java
@Entity
public class Student{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String name;
	//Getters,Setters and Constructors
}
```
_Repositories_
```java
public interface StudentRepo extends JpaRepository<Developer, Long> {
}
```

- Controller
```java
@Controller
public class DevelopersController {
	@Autowired
	StudentRepo repository;

	@GetMapping("/student")
	public String student(Model model) {
		model.addAttribute("students", repository.findAll());
		return "students"; //Name of thymeleaf template to be used as view
	}
```

- View
```html
<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<head> 
	<title>Developers database</title> 
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
	<h1>Students are</h1>
		<p th:each="student : ${students}">
		<p th:text="${students.name">
</body>
</html>
```
---

## Creating RESTful web service
[Example](https://github.com/arjitsharma32/MiniProjects/tree/main/course-work/spring-in28min%26rest%26mvc/springrest)

- REST stands for REpresentational State Transfer. REST is web standards based architecture and uses HTTP Protocol.

- A RESTful web service usually defines a URI, Uniform Resource Identifier a service, provides resource representation such as JSON and set of HTTP Methods.

- Annotations -
1. _@GetMapping_,_@PostMapping,@PutMapping,DeleteMapping or @RequestMapping(path="courses",RequestMethod.Get)_ : HTTP methods
2. _@PathVariable_: We can use it to dynamically get content from URI.
ex - 
```java
@GetMapping("/courses/{courseId}") 
public Course getCourse(@PathVariable String courseId){
	// Do stuff with courseId
}
```
3. _@RequestBody_: When doing post methods, in order to use JSON data in body, we make use of RequestBody.
ex - 
```java
@PostMapping(path="/courses",consumes="application/json")
	public Course addCourse(@RequestBody Course c) {
		// Do stuff with c
	}
```

### REST api example - 

REST endpoints:

GET    /students	Get all students
GET    /students/{studentsId}		Get specific student 
POST   /students	Add a student
PUT    /students	Edit a student
DELETE /students/{studentId}		Delete specific student

_Student.java_
```java
@Entity
public class Course {
	@Id
	private Long id;
	private String name;
	//Getters,Setters & constructors
```

_StudentDao.java_
```java
public interface StudentDao extends JpaRepository<Student,Long>{}
```

_StudentService.java : interface_
```java
public interface CourseService {
	public List<Student> getAllStudents();
	public Optional<Student> getStudent(long id);
	public Student addStudent(Student s);
	public Student updateStudent(Student s);
	public void deleteStudent(long id);
}
```

_StudentServiceImpl.java_
```java
@Service
public class StudentServiceImpl implements StudentService {
	@Autowired
	private StudentDao studentdao;
	
	public StudentServiceImpl() {}

	@Override
	public List<Student> getAllStudents() {	return studentdao.findAll();	}

	@Override
	public Optional<Student> getStudent(long id) {	return studentdao.findById(id);		}
	
	@Override
	public Student addStudent(Student s) {	return studentdao.save(s);	}
	
	@Override
	public Student updateStudent(Student s) {	return studentdao.save(s);	}
	
	@Override
	public void deleteStudent(long id) {	studentdao.deleteById(id);	}
}
```

_StudentController.java_
```java
@RestController
public class StudentController {
	@Autowired
	private StudentService studentservice;
	
	@GetMapping("/students")
	public List<Course> getAllStudents(){	return this.studentservice.getAllStudents();	}
	
	@GetMapping("/students/{studentId}")
	public Optional<Course> getStudent(@PathVariable String studentId){ 
		//@PathVariable is used to dynamically get courseId given in URL
		return this.studentservice.getStudent(Long.parseLong(studentId));
	}
	
	@PostMapping(path="/students",consumes="application/json")
	public Course addStudent(@RequestBody Student s) {	return this.studentservice.addStudent(s);	}
	
	@PutMapping("/students")
	public Course updateStudent(@RequestBody Student c) {	return this.studentservice.updateStudent(s);	}
	
	// In this particular function, it is shown how to send HTTP status codes back
	@DeleteMapping("/students/{studentId}")
	public ResponseEntity<HttpStatus> deleteStudent(@PathVariable String studentId) {
		try {
			this.studentservice.deleteStudent(Long.parseLong(studentId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}	
}
```

_application.properties_
```java
# can change server port
server.port=8080

# database configs - mysql
spring.datasource.url=jdbc:mysql://localhost:3306/springrest
spring.datasource.username=root
spring.datasource.password=1234
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# hibernate cofigs
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL57Dialect
```



## Useful Annotations
- Annotations
1. @Component: Make a bean 
2. @Controller(UI layer), @Repository(related to DB), @Service(Business service layer) 
3. @Autowired: To inject a dependency
4. @Primary: Specify this annotation on particular class for autowiring resolution(Ex - 2 class implement same interface)
5. @Qualifier: Specifies name to bean for autowiring resolution
