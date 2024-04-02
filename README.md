[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The recurance relation for the asymtotic complexity is as follows:
 if n<=3  $\implies$ T(n) = 1 since we just add all elements in one step.
 if  n>3  $\implies$ T(n) = 3T(n/3) since we split the original array into 3 sublist 
 and perform the function on each sublist. 

T(n) = 3T(n/3)
= 3(3T(n/9))    /* Substituting T(n) */
= 3^2(T(n/3^2)) /* Here we see a pattern start to form */
= 3^i(T(n/3^i)) /* where i = log(n) */
= nT(1) $\implies$ $\Theta$(n)
Thus the asymtotic complexity bounded by $\Theta$ is $\Theta$(n)