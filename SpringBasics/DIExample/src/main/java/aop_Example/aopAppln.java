package aop_Example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class aopAppln implements CommandLineRunner{ //another way to run springboot appn
	
	@Autowired
	private business1 b1;
	
	@Autowired
	private business2 b2;
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	public static void main(String s[]) {
		SpringApplication.run(aopAppln.class,s);
	}

	@Override
	public void run(String... args) throws Exception { // present in commandlinerunner, everything in this will run as soon as app loads
		logger.info(b1.calculateSomething());
		logger.info(b2.calculateSomething());
	}
}
