class gfg_peakElement{
	public static int peakElement(int[] arr,int n){
        /* // Iterative Solution, Time: O(n),Space: O(1)
        if(n>1){
            if(arr[0]>arr[1]) return 0; //if 1st element is peak
            else if(arr[n-1]>arr[n-2]) return n-1; //if last element is peak 
        }
        
        for(int i=1;i<n-1;++i){ 
            if(arr[i]>arr[i-1] && arr[i]>arr[i+1])   return i;
        }
        return 0;
        */

        // Binary Search Solution, Time: O(logn), Space: O(1)
        int l,h,mid;
        l=0;
        h=n-1;
        while(l<=h){
            mid=(l+h)/2;
            // check left and right of mid (prob occurs if mid is 1st or last so check that condn too)
            if((mid==0 || arr[mid]>=arr[mid-1]) && (mid==n-1||arr[mid]>=arr[mid+1])) return mid;    
            else if(arr[mid]<arr[mid+1])    l=mid+1;
            else h=mid-1;    
        }
        return 0;
    }
    public static void main(String s[]){
        int[] arr = new int[]{1,2,3};
        System.out.println(peakElement(arr,arr.length));
    }
}