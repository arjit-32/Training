/* 	Ques - Maximum and minimum of an array using minimum number of comparisons
	CAN DO: Pairwise soln
	Note: Can do Using sort but time Complexity - O(nlogn)
*/
import java.util.*;
import java.lang.*;

class Main{
	static class ArrayUtility{	
		int min,max;
		/* Linear Method
		Time - O(n), Comparisons - 2n
		- Traverse array to find min and max

		static ArrayUtility MinMaxInArray(int ar[]){
			ArrayUtility ob = new ArrayUtility();
			ob.min=ob.max=ar[0];
			for(int i=0;i<ar.length;++i){
				if(ar[i]>ob.max)	ob.max=ar[i];
				if(ar[i]<ob.min)	ob.min=ar[i];
			}
			return ob;
		}
		*/
		/* Tournament Method(Divide and Conquer)
		Time - O(n), Comparisons - T(n)= 2T(n/2) + 2

		*/
		static ArrayUtility MinMaxInArray(int ar[],int low,int high){
			ArrayUtility ob = new ArrayUtility();
			ArrayUtility obLeft = new ArrayUtility();
			ArrayUtility obRight = new ArrayUtility();

			ob.min=ob.max=ar[low];	
			if(low==high)	return ob;

			else if(low==high-1){
				if(ar[low]>ar[high]){
					ob.max=ar[low];
					ob.min=ar[high];
				}else{
					ob.max=ar[high];
					ob.min=ar[low];
				}
				return ob;
			}
			int mid = (low+high)/2;
			obLeft = MinMaxInArray(ar,low,mid);
			obRight = MinMaxInArray(ar,mid+1,high);

			ob.max=obLeft.max>obRight.max?obLeft.max:obRight.max;
			ob.min=obLeft.min<obRight.min?obLeft.min:obRight.min;
			
			return ob;			
		}
	}
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int test_cases=sc.nextInt();
		while(test_cases>0){
			//Taking Inputs
			int len=sc.nextInt();
			int ar[]=new int[len];

			for(int i=0;i<len;++i){
				ar[i]=sc.nextInt();
			}

			//Calling static method MinMaxInArray() of ArrayUtility class
			ArrayUtility ob = ArrayUtility.MinMaxInArray(ar,0,len-1);
			System.out.println("Min = "+ob.min);
			System.out.println("Max = "+ob.max);
			
			
		test_cases-=1;
		}	
	}
}