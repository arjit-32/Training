package aop_Example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class business2 {
	
	@Autowired
	private dao2 dao2;
	
	public String calculateSomething() {
		return dao2.retrieveSomething();
	}
}
