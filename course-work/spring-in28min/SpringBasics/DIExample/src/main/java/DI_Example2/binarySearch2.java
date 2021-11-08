package DI_Example2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class binarySearch2 {
	@Autowired
	@Qualifier("bubble")
	private sort2 s; 
	
	public void binarySearchMethod() {
	s.sortmethod();
	System.out.println("Binary searched");
	}
	
}
