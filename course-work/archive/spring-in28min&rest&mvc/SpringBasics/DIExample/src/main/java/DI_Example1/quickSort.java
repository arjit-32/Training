package DI_Example1;

import org.springframework.stereotype.Component;

@Component
public class quickSort implements sort{

	@Override
	public void sortmethod() {
		System.out.println("Quick sorted");
	}

}
