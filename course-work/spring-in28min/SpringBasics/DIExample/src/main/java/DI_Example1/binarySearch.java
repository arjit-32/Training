package DI_Example1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class binarySearch {
	@Autowired
	//private sort quickSort; // Autowiring by name
	private sort s; //Autowiring by type
	
	binarySearch(sort s){
		this.s=s;	}
	
	public void binarySearchMethod() {
	s.sortmethod();
	System.out.println("Binary searched");
	}
	
}
