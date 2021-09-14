/*Ques - Move all negative numbers to beginning and positive to end with constant extra space. Maintaining order isnt required
Example - 
Input:
-5 4 -3 2 -1
Output:
-5 -3 -1 4 2

https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/
*/

import java.util.*;
import java.lang.*;

class Main{
	static int[] swap(int []ar,int var1,int var2){
				int t = ar[var2];
				ar[var2]=ar[var1];
				ar[var1]=t;
				return ar;
		}

	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int test_cases=sc.nextInt();
		while(test_cases>0){

			//Taking Inputs - len: length of array,ar = array itself
			int len=sc.nextInt();
			int ar[]=new int[len];
			for(int i=0;i<len;++i){
				ar[i]=sc.nextInt();
			}

			/* 1_pointer Method
			Time - O(n), Space - O(1)
			Note - In this method order isnt maintained
			Algo - 
				- Maintain a neg_pointer, elements toward left of it will be -ve
			
			int neg_pointer=0;
			for(int i=0;i<len;++i){
				if(ar[i]<0){
					if(neg_pointer!=i){
						ar = swap(ar,neg_pointer,i);
					}
					neg_pointer+=1;
				}
			}
			*/

			/*2_pointer Method
			Time - O(n), Space - O(1)
			Note - In this method order isnt maintained
			Algo - 
				- Traverse m from low to high
				- If ar[m]<0 swap with low, increment low & m
				- If ar[m]>0 swap with high, decrement high
			
			int low,high,m;
			low=m=0;high=len-1;
			while(low<high){
				if(ar[m]<0){
					ar = swap(ar,low,m);
					low++;
					m++;
				}else{
					ar = swap(ar,m,high);
					high--;
				}
			}
			*/
			

			/*2_pointer(Min Comparisons)
			Time - O(n), Space - O(1)
			Algo - 
				- Only swapping If left is +ve & right is -ve
				- In other cases, moving left & right pointers till above case achieved
			*/
			int low,high;
			low=0;high=len-1;
			while(low<high){
				if(ar[low]<0 && ar[high]<0) //If both side element are -ve, no point in swapping
					low+=1;
				else if(ar[low]>0 && ar[high]<0){ // If low is +ve & high is -ve, Swap
					ar = swap(ar,low,high);
					low+=1;
					high-=1;
				}
				else if(ar[low]>0 && ar[high]>0) // If both side element are +ve, no point in swapping
					high-=1;
				else{ // If low is -ve & high is +ve, Move both pointers
					low+=1;
					high-=1;
				}
			}
			
			//Printing
			for(int i=0;i<len;++i){
				System.out.print(ar[i]+" ");
			}

			test_cases-=1;
		}
	}	
}
