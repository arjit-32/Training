package DI_Example2;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("quick")
public class quickSort2 implements sort2{

	@Override
	public void sortmethod() {
		System.out.println("Quick sorted");
	}

}
