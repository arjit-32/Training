package Mockito_test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import Mockito_example.Data;
import Mockito_example.DataService;


@RunWith(MockitoJUnitRunner.class)
class test_Data {
	
	@Mock
	DataService dataservicemock;
	
	@InjectMocks
	Data ob;

	@Test
	void test1() {
		when(dataservicemock.retrieveAllData()).thenReturn(new int[] {20,40,2,19});
		int res = ob.findGreatest();
		assertEquals(40,res);
	}
	
	@Test
	void test2() {
		when(dataservicemock.retrieveAllData()).thenReturn(new int[] {-20,-40,-2,-19});
		int res = ob.findGreatest();
		assertEquals(-2,res);
	}

}
