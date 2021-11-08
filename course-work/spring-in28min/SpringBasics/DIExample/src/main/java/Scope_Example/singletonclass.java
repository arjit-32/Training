package Scope_Example;

import org.springframework.stereotype.Component;

@Component
public class singletonclass {
	public void method() {
		System.out.println(this);
	}
}
