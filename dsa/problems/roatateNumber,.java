import java.util.*;
   
   public class Main{
   
   public static void main(String[] args) {
     Scanner sc = new Scanner(System.in);
     int n = sc.nextInt();
     int k = sc.nextInt(); 
     int count =countDigits(n);
     // Dealing if rotations are more than no. of digits
     k = k % count;
     // Making negative roation into positive roation
     if(k<0)  k=count+k;
     
     int divisor = (int)Math.pow(10,k);
     int multiplier = (int)Math.pow(10,count-k);

     int remainder = n%divisor;
     int quotient=n/divisor;
     int res = remainder * multiplier + quotient;

    System.out.println(res);


    }

    public static int countDigits(int n){
      int count=0;
      while(n>0){
        count+=1;
        n/=10;
      }
      return count;
    }
   }