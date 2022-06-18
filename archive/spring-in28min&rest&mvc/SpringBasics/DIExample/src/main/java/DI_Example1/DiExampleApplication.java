/*	Just has 1 sort interface that is implemented by 2 classes(bubleSort & quickSort)
 *  binarySearch class autowires sort & resolves byName(could have used @Primary too)
 * */

package DI_Example1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class DiExampleApplication {

	public static void main(String[] args) {
	ApplicationContext apx=SpringApplication.run(DiExampleApplication.class, args);
	binarySearch b = apx.getBean(binarySearch.class);
	b.binarySearchMethod();
	}

}
