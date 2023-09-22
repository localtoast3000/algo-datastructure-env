/*
========================================================================
TITLE: Temperatures - Closest to Zero
PLATFORM: Codin Games
DIFFICULTY: easy
========================================================================

DESCRIPTION:
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Analyze records of temperature to find the closest to zero.

Sample temperatures
[7, -10, 13, 8, 4, -7, -12, -3, 3, -9, 6, -1, -6, 7]

Here, -1 is the closest to 0.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  

(PEDAC approach)

------------------------------------------------
(P)roblem - Understand the problem
------------------------------------------------

Define the inputs and outputs of the algorithm's function.

  - Input: Array of numbers that can range from -273 to 5526
  - Output: The number that is closest to zero

Q & A

Consider if two negative numbers are presented

Rules:

  1. If two numbers are equally close to zero, positive integer has to be considered 
  closest to zero (for instance, if the temperatures are -5 and 5, then display 5).

  2. Display 0 (zero) if no temperatures are provided


Mental Model:

  Calculate the absolute value of each temperature in the list and keep track of the 
  lowest value and it's corresponding temperature, 
  if the next absolute value that is being visited in the list is the same as the 
  currently stored smallest absolute value, then check if the current temperature is positive, 
  if not then convert it to a positive version of itself by multiplying it by -1, 
  this way we respect rule 1.


------------------------------------------------
(E)xamples 
------------------------------------------------

Write some examples and the expected results from them.
Here you can think about and define the edge cases.

  - Example 1: ([7, -10, 13, 8, 4, -7, -12, -3, 3, -9, 6, -1, -6, 7]) ==> -1
  - Example 2: ([10, 2, -4, 3]) ==> 2
  - Example 3: ([900, -430, 430, -689]) ==> 430
  - Example 4: ([-10, -10]) ==> -10

------------------------------------------------
(D)ata Structures
------------------------------------------------

  - HashTable: To store the current smallest absolute value and the correspondinf temperature value 

  (e.g.):
    smallest_absolute = { 
          [absolute_value]: Type: Number
          [temperature_value]: Type: Number
          ...
    }

------------------------------------------------
(A)lgorithm
------------------------------------------------

  1. Define variables to track the smallest absolute value and to store its mapped temperature value 
  2. Loop through the temperatures
  3. On each pass of the loop, calculate its absolute value
  4. If there is no value stored in the tracked values then it is the first to be stored but if there is a value then compare the two 
     absolute values, if the new value is smaller, then it will replace the current stored value else the current stored value will stay.
     if the current stored absolute value is the same as the current visited absolute value then check if the stored temperature value is 
     negative, if so multiply it by -1 to make it positive.
  5. At the end of the loop return the stored temperature value

------------------------------------------------
(C)ode
------------------------------------------------
*/

export function closestToZero(temperatures: number[] | undefined): number | undefined {
  if (!temperatures || temperatures.length === 0) return 0;

  let tracked: { smallest_abs: number; temp_val: number } | null = null;

  for (const temp of temperatures) {
    const current_abs = Math.abs(temp);

    if (!tracked || current_abs < tracked.smallest_abs) {
      tracked = { smallest_abs: current_abs, temp_val: temp };
      continue;
    }
    if (current_abs === tracked.smallest_abs)
      tracked.temp_val = temp === tracked.temp_val ? temp : temp < 0 ? temp * -1 : temp;
  }

  return tracked?.temp_val;
}
