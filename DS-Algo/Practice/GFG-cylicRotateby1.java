/*Ques - Cyclically rotate an array by one.
Example - 
Input:
N = 5 
A = {1 2 3 4 5}
Output:
{5 1 2 3 4}

https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0
*/

import java.util.*;
import java.lang.*;

class Main{
	
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

			int temp=ar[len-1];
			if(len>1){ // Edge case - If i = 1 then infinite loop
				for(int i=len-2;i>=0;--i){
					ar[i+1]=ar[i];
				}
			}
			ar[0]=temp;

			//Printing
			for(int i=0;i<len;++i){
				System.out.print(ar[i]+" ");
			}
			System.out.println();
			test_cases-=1;
		}	
	}
}