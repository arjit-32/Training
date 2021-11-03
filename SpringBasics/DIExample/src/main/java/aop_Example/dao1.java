package aop_Example;

import org.springframework.stereotype.Repository;

@Repository
public class dao1 {
	public String retrieveSomething() {
		return "Dao1";
	}
}
