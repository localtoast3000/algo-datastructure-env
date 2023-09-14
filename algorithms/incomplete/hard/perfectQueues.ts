/*

TITLE: Perfect Queues
PLATFORM: Code wars
DIFFICULTY: hard
DESCRIPTION:

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

            "Given an array of queues, how many times must you perform dequeueing operations, 
            for each number to end up in its associated queue?"

            queues                          perfect

            [[0, 1], [2], [1, 1]]     ->    [[0], [1, 1, 1], [2]]

            
            Input
            
            Queues, an array of zero, one or more queues, each queue is an array containing zero, 
            one or more non-negative integers each number is within the range: 0 ≤ n < number of queues
            the head of a queue is the right-most item the tail of a queue is the left-most item
            dequeueing an element from a queue is taking the head enqueueing an element to a queue is prepending 
            it to the tail.
            
            Output

            Return a non-negative integer representing the number of dequeueing operations to get each number to 
            end up in its associated queue, the associated queue for a number (n) is the queue at 0-based index n of 
            the input array of queues empty is a valid terminal state for any queue empty is a valid terminal state 
            for the array of queues.

            Method Signature
            
            dequeueCount(queues)
            
            popCount(queues) (allowed for backward compatibility)
            
            Algorithm
            
            Your code should yield the same outcome as the algorithm described below, but should be more efficient 
            than this naive approach, and you can use any algorithm you want to get the job done.

            start at queue 0

            keep performing the following actions until all queues have entered a terminal state if the current queue 
            has reached a terminal state, move to next queue moving from the last queue to the next, takes you back to 
            the first queue otherwise dequeue a number of the current queue and enqueue it to the associated queue of 
            that number; that queue becomes the new current queue keep track of each time you dequeue a number and return 
            the total amount of dequeueing operations
            
            Examples
            
            -----------------------------------------------------
            Example 1
            -----------------------------------------------------

            queues                    dequeueCount        

            [ [0, 0],                 0               
            [1, 1], 
            [2, 2] ]
            
            steps

            - all numbers are already in their associated queue
            
            -----------------------------------------------------
            Example 2
            -----------------------------------------------------

            queues                    dequeueCount        

            [ [],                     2                
            [0, 2],
            [] ]
            
            steps

            - queue 0 is empty - a valid terminal state -, so move to queue 1

            - cnt #1: dequeue number 2 from queue 1 and enqueue to queue 2

            [ [],                          
            [0],
            [2] ]
            
            - queue 2 only has elements with value 2 - a valid terminal state -, so move to queue 0

            - queue 0 is empty - a valid terminal state -, so move to queue 1

            - cnt #2: dequeue number 0 from queue 1 and enqueue to queue 0

            [ [0],                          
            [],
            [2] ]
            
            -----------------------------------------------------
            Example 3
            -----------------------------------------------------

            queues                    dequeueCount        

            [ [0, 1, 2],              5                
            [1, 1, 2],
            [2, 0, 0] ]
            
            steps

            - cnt #1: dequeue number 2 from queue 1 and enqueue to queue 2

            [ [0, 1],                          
            [1, 1, 2],
            [2, 2, 0, 0] ]
            
            - cnt #2 dequeue number 0 from queue 2 and enqueue to queue 0

            [ [0, 0, 1],                          
            [1, 1, 2],
            [2, 2, 0] ]
            
            - cnt #3 dequeue number 1 from queue 0 and enqueue to queue 1

            [ [0, 0],                          
            [1, 1, 1, 2],
            [2, 2, 0] ]
            
            - cnt #4 dequeue number 2 from queue 1 and enqueue to queue 2

            [ [0, 0],                          
            [1, 1, 1],
            [2, 2, 2, 0] ]
            
            - cnt #5 dequeue number 0 from queue 2 and enqueue to queue 0

            [ [0, 0, 0],                          
            [1, 1, 1],
            [2, 2, 2] ]
            
            Input Constraints

            Some optimisation is required, naive solutions will time out

            500 random tests with 5 ≤ queues ≤ 10
            500 random tests with 80 ≤ queues ≤ 100
            100 random tests with 800 ≤ queues ≤ 1000

            the number of elements in each queue: 0 ≤ queue length ≤ number of queues


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  

( PEDAC approach )

------------------------------------
(P)roblem - Understand the problem
------------------------------------

Input: A array of un-sorted queues of integers each representing thier index within a larger unified queue
Output: Number of operations to sort array so each queue item is in their correct index within the queue


Refactor:

Sort a given array so that each number found is placed in the correct index of a queue in which the integer represents.
Blank items are valid values and will stay put unless a number has its index position, in that case the blank value will get
pushed up an index and the number will take its place.


Rules:

1. Blanks are valid values
2. Values will be either blank, 0 or any positive integer
3. The head of a queue is the right-most item
4. The tail of a queue is the left-most item
5. Dequeueing an element from a queue is taking the head
6. Enqueueing an element to a queue is prepending it to the tail

--------------------------
(D)ata
--------------------------

An array to define the queue 

--------------------------
(A)lgorithm
--------------------------

[ [0, 1, 2], [1, 1, 2], [2, 0, 0] ]

1. Start at index n
2. Get the last index of the current sub queue and check if it is larger that the index


--------------------------
(C)ode
--------------------------

Finally, write the algorithm in code and test with many end cases before submitting


1. Brute force attempt -- Don't think about the complexity yet, just write a working algorithm

*/

export const dequeueCount = (queues: number[][]) => {};

console.log(
  dequeueCount([
    [0, 1, 2],
    [1, 1, 2],
    [2, 0, 0],
  ])
); // Expected 5 operations
/* 

2. Refactor and optimise -- Once you have a working algorithm, can you refactor it and optimise
                            for time and space complexity ( Big O Complexity ) ?
*/

// Add function here
