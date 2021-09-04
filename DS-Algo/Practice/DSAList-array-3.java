/* Ques: Find the Kth smallest element of array 
https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1
*/
import java.util.*;
import java.lang.*;

class Main
{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		int test_cases=sc.nextInt();
		while(test_cases>0){
			//Taking Inputs - len: length of array,ar = array itself
			int len=sc.nextInt();

			int ar[]=new int[len];
			

			for(int i=0;i<len;++i){
				ar[i]=sc.nextInt();
				
			}
			int k = sc.nextInt();

			/* Brute Force(Sorting)
			Time - O(nlogn), Space - O(1)
			Arrays.sort(ar);
			System.out.println(ar[k-1]);
			*/




			/* MinHeap Soln
			Algo - 
			- Add all element to minHeap
			- remove elements from 0 to k
			- Display peek of minHeap
			Time - O(n + klogn), Space - O(n)
			

			PriorityQueue<Integer> pq = new PriorityQueue<Integer>(); 
			for(int i=0;i<len;++i){
				pq.add(ar[i]);
			}


			for(int i=0;i<k-1;++i)	pq.poll();	
			
			System.out.println(pq.peek());
			*/


			/* MaxHeap Soln
			Algo -
			- For every element of array
			- Add to MaxHeap 
			- If i>=k Remove top element from heap
			- At last kth smallest will be left at root of maxHeap
			
			Time - O(n+(n-k+1)log(n-k+1)), Space - O(n)
			*/
			PriorityQueue<Integer> pq = new PriorityQueue<Integer>(Comparator.reverseOrder());
			for(int i=0;i<len;++i){
				pq.add(ar[i]);
				if(i>=k){
					pq.poll();
				}
			}

			System.out.println(pq.peek());




			test_cases--;
		}
	}
}
