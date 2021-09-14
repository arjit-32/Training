/*Ques - Sort an array of 0s, 1s and 2s 
https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1
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

			// Logic 1: counting frequency of each
			/*
			int count_0,count_1,count_2;
			count_0=count_1=count_2=0;
			for(int i=0;i<len;++i){
				if(ar[i]==0) count_0+=1;
				else if(ar[i]==1) count_1+=1;
				else count_2+=1;
			}
			for(int i=0;i<len;++i){
				if(count_0>0){	
					ar[i]=0; 
					count_0-=1;
				}
				else if(count_1>0){	
					ar[i]=1;
					count_1-=1;
				}
				else 	ar[i]=2;					
			}
			*/

			//Logic 2: 2 pointers- low high
			int low=0;
			int mid=0;
			int high=len-1;
			

			while(mid<=high){
				if(ar[mid]==0){
					ar = swap(ar,low,mid);
					low++;
					mid++;
				}
				else if (ar[mid]==2){
					ar  = swap(ar,mid,high);
					high--;
				}
				else mid++;
			}



			for(int i=0;i<len;++i){
				System.out.print(ar[i]+" ");
			}




		test_cases-=1;
		}
	}
}