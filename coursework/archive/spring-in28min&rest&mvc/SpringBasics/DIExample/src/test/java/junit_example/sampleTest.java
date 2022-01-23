package junit_example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class sampleTest {

	@Test
	void test_for_both_positive() {
		sample s = new sample();
		assertEquals(2,s.add(1,1));
	}
	
	@Test
	void test_for_both_negative() {
		sample s = new sample();
		assertEquals(-2,s.add(-1,-1));
	}
	
	@Test
	void test_for_zero() {
		sample s = new sample();
		assertEquals(0,s.add(1,-1));
	}
}
