package aop_Example;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;

@Aspect
@Configuration
public class aspect {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	// execution(* Package.*.*(..)) -> package ki saari classes me kisi bhi argument k sath
	@Before("execution(* aop_Example.*.*(..))")
	public void checkIfDataIsClean(JoinPoint joinPoint){
		logger.info("Checking if data is clean for {}", joinPoint);
	}
}
