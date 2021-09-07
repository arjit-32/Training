/*Ques - Write a program to reverse an array*/

import java.util.*;
import java.lang.*;

class Main{
	/* Recursive Soln
	Time - O(n), Space - O(1) 
	
	public static void reverse(int ar[],int start,int end){
		if(start>end) return;
		int t = ar[start];
		ar[start]=ar[end];
		ar[end]=t;

		++start;
		--end;
		reverse(ar,start,end);
	}
	*/

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

			/* Iterative Soln
			Time - O(n), Space - O(1)
			- Traverse till half of array
			- Swap(i,(len-1)-i)
			*/

			int t=0;
			for(int i=0;i<len/2;++i){
				t=ar[i];
				ar[i]=ar[len-1-i];
				ar[len-1-i]=t;
			}
			

			/* Recursive function call
			reverse(ar,0,len-1);
			*/

			//Printing
			for(int i=0;i<len;++i){
				System.out.println(ar[i]);
			}

			test_cases-=1;
		}	
	}
}