/*TODO: Complete this - Cant do with sieve of Eratosthenes */
import java.util.*;
import java.lang.*;

class Main
{
	/* NAIVE SOLUTION

	static boolean isPrime(int n){
		if(n<2) return false;
		boolean flag=true;
		for(int i =2;i<=n/2;++i){
			if(n%i==0){
				flag=false;
				break;	
			} 
		}
		return flag;
	}



	public static void main (String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int t=sc.nextInt();
		while(t>0){
			int start_index = sc.nextInt();
			int last_index = sc.nextInt();
			for(int i=start_index;i<=last_index;++i){
				if(isPrime(i)){
					System.out.println(i);
				}
			}
			t--;
		}
	}
	*/

	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		int t=sc.nextInt();
		while(t>0){
			int start_index = sc.nextInt();
			int last_index = sc.nextInt();
			boolean arr[] = new boolean[last_index+1];

			for(int i=0;i<arr.length;++i){
				arr[i]=true;
			}
			for(int p=2;p*p<=last_index;++p){
				if(arr[p]==true){
					for(int j=p*p;j<=last_index;j+=p){
						arr[j]=false;
					}
				}
			}
			for(int i=Math.max(2,start_index);i<last_index+1;++i){
				if(arr[i]) 
					System.out.println(i);
			}
			t--;
		}
	}
}