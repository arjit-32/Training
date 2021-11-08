package DI_Example1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class binarySearch {
	@Autowired
	private sort quickSort; //Autowiring by name
	
	public void binarySearchMethod() {
	quickSort.sortmethod();
	System.out.println("Binary searched");
	}
	
}
