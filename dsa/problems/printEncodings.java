import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String s=sc.nextLine();
        printEncodings(s,"");
    }

    public static void printEncodings(String str, String res) {
        if(str.length()==0) {
            System.out.println("REsult = " + res);
            return;
        }else if(str.length()==1){
            if(str.charAt(0)=='0')  return;
            printEncodings(str.substring(1),res+(char)('a' + (Integer.parseInt(str.substring(0,1)) - 1)) + "");
        }else{
        if(str.charAt(0)=='0')  return;
        String str1= str.substring(0,1);
        printEncodings(str.substring(1),res+(char)('a' + (Integer.parseInt(str1) - 1)) + "");
        
        String str2= str.substring(0,2);
        printEncodings(str.substring(2),res+(char)('a' + (Integer.parseInt(str2) - 1)) + "");
        }
    }

}