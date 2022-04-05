# Bit Manipulation

How bits are stored. 
What should be min and max val(considered negatives ?)
How to represent negative nums using bits.(Smart way is 2s complement as it adds 1 to 1s complement thus removing the problem of +0 and -0)



### 5.1 COMPUTING THE PARITY OF A WORD
The parity of a binary word is 1 if the number of Is in the word is odd; otherwise,
it is 0.

### Solution
```java
// Brute Force - O(n)
public static short parityCheck(long x) {
        short result = 0;
        while (x!=0) {
        result ^= (x & 1); // Xor coz if odd no. of 1s then it will stay 1
        x = x>>>1;
        }
        return result;
    }
```

### [Basics of Bit Manipulation](https://nados.io/question/basics-of-bit-manipulation)
You are given a number n. Print the number produced on setting its i-th bit, unsetting its j-th bit, toggling its k-th bit also, check if its m-th bit is on or off. Print 'true' if it is on, otherwise print 'false'.

```java
int onmask= 1<<i; // or
int offmask= ~(1<<j); // and, we negated because mask should look something like 11110111
int togglemask = 1<<k; //xor
int checkmask = 1<<m; //and

System.out.println(n|onmask);
System.out.println(n&offmask);
System.out.println(n^togglemask);
System.out.println((n & checkmask) == 0? false: true);
```

### [Rightmost Set Bit](https://nados.io/question/print-value-of-rsb-mask)
Create a mask by keeping rightmost set bit 1, and the rest bits to 0s

Explanation- 
n=      1010100
n'=     0101011
n''=    0101100
n&n''=  0000100

We make use of the fact that on flipping bits(1s complement) all bits left of RSB will be unchanged on converting to 2s complement, thus when we & them only RSB remains.

```java
System.out.println(n&-n);
```

