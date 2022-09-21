# Introduction

## Basic Terms

`Data Types`:
- System Defined DTs: int,float, etc
- User Defined DTs: structs,classes etc

`Data Structure`: A way of storing & organizing data in memory so that it can be used efficiently.
Types:
- Linear DS: Elements accessed in sequential order. Ex- LinkedLists,Stacks,Queues etc
- Non-linear DS: Trees,graphs etc

`ADTs`: Whenwe combine DS with operations that can be performed on it, they are called Abstract DTs.

`Algorithms`: Step by step unambiguous instructions to solve a given problem.
Good algo has 2 properties - Correctness and Efficiency

---

## Analysis of Algorithms

Goal of algo analysis is to compare algos based on space,time,developer effort.
`Running Time Analysis`: Process of determining how running time increases as input size increases.

How to compare algos?
Best way is not processing time or no. of statements but expressing running time as function of input size n & compare these different functions.

`Rate of Growth`: Rate at which running time increases as function of input. Ex - n^4 + n^2 + 1 can be approximated to n^4(as it has highest Rate of Growth)
Ex: 1 -> log(n) -> n -> nlogn -> n^2 -> n^3 -> 2^n

Types of Analysis:
- Worst case : I/p for which algo takes longest time
- Best case
- Avg case

## Asymptotic Notations
It is the mathematical tool with which we can do Worst,best & avg case analysis.
For a f(n) we are trying to find another function g(n) which approximates f(n) at higher value of n.

### Big-O Notation
- Represented as f(n)=O(g(n))
- It gives tight upper bound of the given function.
- At larger values of n,upper bound of f(n) is g(n). [or g(n) gives max rate of growth for f(n) at larger values of n] 
- There exists positive constants c & n0 such that 0 <= f(n) <= c.g(n) for all n>=n0

### Omega Notation
- It gives tight lower bound of the given function.
- At larger values of n,lower bound of f(n) is g(n).  
- There exists positive constants c & n0 such that 0 <= c.g(n) <= f(n) for all n>=n0

### Theta Notation
- Average runnin time of an algo
- There exists positive constants c1,c2 & n0 such that 0 <= c1.g(n) <= f(n) < c2.g(n) for all n>=n0

---

## Master Theorem
It is theorem that can be used to find running time of divide & conquer recurrences.
T(n) = aT(n/b) + f(n)

If f(n) = O(nlogb a-ϵ), then T(n) = Θ(nlogb a).
If f(n) = Θ(nlogb a), then T(n) = Θ(nlogb a * log n).
If f(n) = Ω(nlogb a+ϵ), then T(n) = Θ(f(n)).

# LinkedList

Linked List is a linear data structure.