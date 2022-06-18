package aop_Example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class business1 {
	
	@Autowired
	private dao1 dao1;
	
	public String calculateSomething() {
		return dao1.retrieveSomething();
	}
}
