package Mockito_example;

public class Data {
	public DataService dataService;
	
	public Data(DataService dataService){
		this.dataService=dataService;
	}
	
	public int findGreatest() {
		int[] data = dataService.retrieveAllData();
		int greatest = Integer.MIN_VALUE;
		
		for(int i: data) 
			greatest = Math.max(greatest, i);
		
		return greatest;
	}
}
