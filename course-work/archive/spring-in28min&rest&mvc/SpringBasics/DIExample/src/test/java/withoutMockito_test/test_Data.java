package withoutMockito_test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import Mockito_example.Data;
import Mockito_example.DataService;

class test_Data {

	@Test
	void test() {
		Data ob = new Data(new DataServiceStub());
		int res = ob.findGreatest();
		assertEquals(40,res);
	}

}
// We create a stub, a timepass implementation of DataService to test Data
class DataServiceStub implements DataService{
	@Override
	public int[] retrieveAllData() {
		return new int[] {20,40,1,4};
	}
	
}