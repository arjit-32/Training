/*
 * Just like Example1, the only difference being that this uses @Qualifier for autowiring resolution
 * */

package DI_Example2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class DiExampleApplication2 {

	public static void main(String[] args) {
	ApplicationContext apx=SpringApplication.run(DiExampleApplication2.class, args);
	binarySearch2 b = apx.getBean(binarySearch2.class);
	b.binarySearchMethod();
	}

}
