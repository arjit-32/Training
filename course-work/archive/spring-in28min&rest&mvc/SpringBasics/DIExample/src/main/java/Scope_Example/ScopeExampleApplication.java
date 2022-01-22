/*	Just has 1 sort interface that is implemented by 2 classes(bubleSort & quickSort)
 *  binarySearch class autowires sort & resolves byName(could have used @Primary too)
 * */

package Scope_Example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class ScopeExampleApplication {

	public static void main(String[] args) {
	ApplicationContext apx=SpringApplication.run(ScopeExampleApplication.class, args);
	singletonclass s1 = apx.getBean(singletonclass.class);
	singletonclass s2 = apx.getBean(singletonclass.class);
	s1.method();
	s2.method();
	
	prototypeclass p1 = apx.getBean(prototypeclass.class);
	prototypeclass p2 = apx.getBean(prototypeclass.class);
	p1.method();
	p2.method();
	
	}

}
