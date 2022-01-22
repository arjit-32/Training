package DI_Example2;

import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Qualifier("bubble")
public class bubbleSort2 implements sort2{

	@Override
	public void sortmethod() {
		System.out.println("Bubble sorted");
	}

}
