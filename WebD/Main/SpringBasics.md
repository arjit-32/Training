## Overview
- Simplify Java Enterprise Development
- Lightweight dev with java POJOs(better than EJBs that were used in J2EE)
- Dependency Injection 
- Minimise boilerplate code
---

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
	binarySearch(sort s){
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
    1. ByType : done automatically
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
---

## Lifecycle of Bean
- *@PostConstruct* - This method runs just after bean is created.
- *@PreDestroy* - Runs just before bean is destroyed

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
## Mockito


## Useful Annotations
- Annotations
1. @Component: Make a bean 
2. @Controller(UI layer), @Repository(related to DB), @Service(Business service layer) 
3. @Autowired: To inject a dependency
4. @Primary: Specify this annotation on particular class for autowiring resolution(Ex - 2 class implement same interface)
5. @Qualifier: Specifies name to bean for autowiring resolution
