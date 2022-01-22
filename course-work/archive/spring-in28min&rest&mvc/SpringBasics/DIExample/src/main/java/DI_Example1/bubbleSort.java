package DI_Example1;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class bubbleSort implements sort{

	@Override
	public void sortmethod() {
		System.out.println("Bubble sorted");
	}

}
