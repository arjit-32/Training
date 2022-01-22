package Lifecycle_Example;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.stereotype.Component;

@Component
public class random {
	public void method() {
		System.out.println("Method of random class");
	}
	
	@PostConstruct
	public void before() {
		System.out.println("PostConstruct - This runs just after bean is created");
	}
	
	@PreDestroy
	public void after() {
		System.out.println("PreDestroy - Runs just before being destroyed");
	}
}
