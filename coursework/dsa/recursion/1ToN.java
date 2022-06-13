import java.util.*;
public class MyClass {
    public static void main(String s[]){
        Scanner sc = new Scanner(System.in);
        int n=sc.nextInt();
        Print(n);
    }

    public static void Print(int n){
        if(n==1) {System.out.println(1); return;}
        Print(n-1);
        System.out.println(n);
    }
}