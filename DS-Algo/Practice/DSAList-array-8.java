/*Ques - Kadane's Algorithm. Given an array arr of N integers. Find the contiguous sub-array with maximum sum.
Example - 
Input:
N = 5 
A = {1 2 3 -2 5}
Output:
9
Explanation:
Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.

https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1
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

			int global_max,temp_sum;  //global_max stores max among all subarray
			global_max=temp_sum=ar[0]; //temp_sum keeps tracks of contiguous subarray sum, If reaches below 0 reset

			for(int i=1;i<len;++i){
				temp_sum+=ar[i];
				if(global_max<temp_sum)	global_max=temp_sum;
				if(temp_sum<0) temp_sum=0;
			}

			//Printing
			System.out.print(global_max);
			
			test_cases-=1;
		}	
	}
}