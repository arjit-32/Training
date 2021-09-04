/*Ques - Union of two arrays .Given two arrays A and B of size N and M respectively. The task is to find union between these two arrays.
Example - 
Input:
N,M = 5 3
A = {1 2 3 4 5}
B = {1 2 3}
Output:
5
Explanation:
1, 2, 3, 4 and 5 are the elements which comes in the union set of both arrays.

https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0
*/

import java.util.*;
import java.lang.*;

class Main{
	
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int test_cases=sc.nextInt();
		while(test_cases>0){

			//Taking Inputs 
			int len1=sc.nextInt();
			int len2=sc.nextInt();
			int A[]=new int[len1];
			int B[]=new int[len2];
			for(int i=0;i<len1;++i){
				A[i]=sc.nextInt();
			}
			for(int i=0;i<len2;++i){
				B[i]=sc.nextInt();
			}

			HashSet<Integer> C = new HashSet<>();
			for(int i=0;i<len1;++i)	C.add(A[i]);
			for(int i=0;i<len2;++i)	C.add(B[i]);	

			//Printing
			System.out.println(C.size());
		
			test_cases-=1;
		}	
	}
}