
package Lifecycle_Example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class LifecycleExampleApplication {

	public static void main(String[] args) {
	ApplicationContext apx=SpringApplication.run(LifecycleExampleApplication.class, args);
	random r = apx.getBean(random.class);
	r.method();
	}
}
