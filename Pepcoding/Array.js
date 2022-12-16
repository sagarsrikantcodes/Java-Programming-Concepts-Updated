/*
542 / 8 => 6
67 / 8 => 3
8 / 8 => 0
1/ 8  => 1 
0 / 8 => 0 
answer 1036

6 * 8^2 + 3 * 8^1 + 4 * 8^0
6 * 64 + 3 * 8 + 4
answer 412

*/

/*
Problem
- input: decimal number n, base b
- output: number of base b

example
decimal number (n) = 57
base (b) = 2

find the binary value of decimal value 57

output is 111001

Data structure 
decimal number value => binary number value

Algo
57/2 = 1
28/2 = 0
14/2 = 0
7/2 = 1
3/2 = 1
1/2 = 1
0/2 = 0

111001
57 % 2 = 1
57 / 2 = 28
28 % 2 = 0
28 / 2 = 14
14 % 2 = 0
14 / 2 = 7
7 % 2 = 1
7 / 2 = 3
3 % 2 = 1
3 / 2 = 1
1 % 2 = 1
1 % 2 = 0 

- init str to empty string
- while d is greater than 0
    - append the remainder of d divided by b to str
    - reassign d, d divided by b rounded down
- return str
*/

// function decimalToBase(d, b) {
//     let str = "";
//     while (d > 0) {
//         // console.log(d, "%", b);
//         str = (d % b) + str;
//         d = Math.floor(d / b);
//     }
//     return str;
// }

// console.log(decimalToBase(57, 2));

/*
Problem
- input: number (n), base (b)
- ouput: number decimal
- convert the value given at base and convert to decimal

Example
number value = 111001
base = 2

Data Structure
number value at base => decimal value

Aglo
- init exponent at 0
- init decimal to 0
- while n is greater than 0
    - get each digit 
    - reassign n to the value of n divided by 10 rounded down
    - multiply the digit by the base to the exponent and init to value
    - add value to decimal
    - increment exponent
- return decimal
*/

// function baseToDecimal(n, b) {
//     let exponent = 0;
//     let decimal = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         n = Math.floor(n / 10);
//         let value = digit * b ** exponent;
//         decimal += value;
//         exponent += 1;
//     }
//     return decimal;
// }

// console.log(baseToDecimal(111001, 2));
/*
base to any base
- input: number in base (b)
- output: decimal
- input: decimal at base
- output to value at base

Algo 
call baseToDecimal with the number (n) and base (b1) passed in returns a decimal value init to decimal 

call decimalToBase with decimal passed in and the base (b2) pass in and return the value 

*/

// function baseToBase(n, b1, b2) {
//     let decimal = baseToDecimal(n, b1);
//     return decimalToBase(decimal, b2);
// }

// console.log(baseToBase(111001, 2, 3));

/*
input: number(base), number(num1), number(num2)
output: number at base

- find the value of adding two number values of a certain base
example
8 (base)
777 (num1)
1 (num2)

7 + 1 = 8,  sum >= 8,  
- 8/8 = 1, 8%8 = 0
- 7 + 0 + 1 = 8
- 8/8 = 1, 8%8 = 0 
- 7 + 0 + 1 = 8   
- 8/8 = 1, 8%8 = 0 
- add 1
1000

example
2 (base)
11011 (num1)
 1111 (num2)

1 + 1 = 2
2/2 = 1, 2%2 = 0
1 + 1 + 1 = 3
3/2 = 1, 3%2 = 1
0 + 1 + 1 = 2
2/2 = 1, 2%2 = 0
1 + 1 + 1 = 3
3/2 = 1, 3%2 = 1
1 + 1 + 0 = 2
2/2 = 1, 2%2 = 0
add 1
101010

Algo
- init value to empty str
- init curCarry to 0;
- while either nums are greater than 0
    - get last digit of num1 and init to digit1
    - get last digit of num2 and init to digit2
    - get the sum of digit1, digit2 and curCarry 
    - reassign num1 and num2 to its current value divided by 10, rounded down
    - get carry by dividing sum by base rounded down and init to carry
    - get curVal by getting the remainder of sum divided by base and init to curVal
    - reassign value to curVal plus value
- if carry is greater than 0 
    - reassign value to carry plus value
- return value
5, 4210, 1220
*/
// function baseAddition(b, num1, num2) {
//     let value = 0;
//     let carry = 0;
//     let e = 0;
//     while (num1 > 0 || num2 > 0) {
//         let digit1 = num1 % 10;
//         let digit2 = num2 % 10;
//         // console.log(digit1, digit2);
//         num1 = Math.floor(num1 / 10);
//         num2 = Math.floor(num2 / 10);
//         let sum = digit1 + digit2 + carry;
//         carry = Math.floor(sum / b);
//         let curVal = sum % b;
//         // console.log("curVal", curVal);
//         value += curVal * 10 ** e;
//         e += 1;
//     }
//     if (carry > 0) {
//         value += carry * 10 ** e;
//     }
//     //console.log("val", value);
//     return value;
// }

// console.log(baseAddition(2, 11011, 1111));

/*

Example
8 (base)
100 (num2)
  1 (num1)

Algo 
- init value to empty string
- init carry to 0
- init barrow to 0
- while the second number is greater than 0
    - get the first and second digit
    - reassign the second and first number by dividing current value by 10
    - if digit1 minus carray is less than digit2
        - init barrow to difference of carry and digit2 of digit1 rounded up
        - add barrow * base - carry + num1 then minus num2 times the base weight to the current value

    - else 
        - minus carry from digit1 and then minus digit1 and then add to current value.
- return value 
*/

// function baseSubtraction(b, n1, n2) {
//     let value = 0;
//     let carry = 0;
//     let barrow = 0;
//     let e = 0;
//     while (n1 > 0) {
//         let d1 = n1 % 10;
//         let d2 = n2 % 10;
//         n1 = Math.floor(n1 / 10);
//         n2 = Math.floor(n2 / 10);
//         //console.log(d1, "-", carry, "<", d2);
//         if (d1 - carry < d2) {
//             //0 - 1 < 0
//             barrow = Math.ceil(Math.abs(d1 - carry - d2) / b); // 0 + 1,  0 - 1 -0
//             value += (barrow * b - carry + d1 - d2) * 10 ** e;
//             carry = barrow;
//         } else {
//             value += (d1 - carry - d2) * 10 ** e;
//         }
//         e += 1;
//     }
//     return value;
// }

// console.log(baseSubtraction(8, 100, 1));

/*
init value to 0
while num2 is greater than 0 
    - get the current digit of num2 and multiply num1
    - init carry to 0
    - init curVal to 0
    - while num1 is greater than 0
        - get the current digit (d1) of num1 and multily by (d2) plus the carry and init to multiple
        - get the curVal by getting the remainder of the multiple divided by base times the base weight plus curVal
        - get the carry by dividing the multiple by the base
    - add value to current 
    - call the baseAddition and pass in the current value and curVal and reassign value to value
- return value
- 2156, 743
3 * 2156 => 6512
4 * 2156 
7 * 2156

6512
10670
3 + 20 = 23 % 8 =7
*/

// function baseMultiplication(b, n1, n2) {
//     let value = 0;
//     let ee = 0;
//     while (n2 > 0) {
//         // let d2 = n2 % 10;
//         let d2 = n2 % 10;
//         n2 = Math.floor(n2 / 10);
//         let c = 0;
//         let curVal = 0;
//         let e = 0;
//         //console.log("n2", n2, "d2", d2);
//         n1c = n1;
//         while (n1c > 0) {
//             let d1 = n1c % 10;
//             //console.log("d1", d1);
//             n1c = Math.floor(n1c / 10);

//             let mult = d1 * d2 + c;
//             // console.log(d1, "*", d2, "+", c, mult);
//             //console.log("mult", mult, "%", b, mult % b);
//             curVal += (mult % b) * 10 ** e;
//             // console.log("curDig", curVal);
//             //console.log("curVal", curVal);
//             c = Math.floor(mult / b);
//             // console.log("C:", c);
//             e += 1;
//         }
//         if (c > 0) {
//             curVal += c * 10 ** e;
//         }
//         console.log("curVal", curVal);
//         value = baseAddition(b, value, curVal * 10 ** ee);
//         ee += 1;
//         console.log("value", value);
//     }
//     return value;
// }

/*
1220
*  1
1220

1220
   3
6 % 5 = 1
6 + 1 = 7 % 5 = 2 
4210
*/
// console.log(baseAddition(8, 2156, 74));
// console.log(baseMultiplication(8, 2156, 74));
/*
Problem
- input: array of numbers
- output: number (span)

span - the difference between the min and max value of the numbers in the input array

example
6
15
30
40
4
11
9

output: 40 - 4 = 36
Data Structure
array => number (span)
Algo 
init largestNum to min value
inti smallestNum of max value
- iterate through the array
    - if current number is smaller than smallestNum
        - reassign smallestNum to current numnber
    - if current number is larger then largestNum
        - reassign largestNum to current number
- return largestNum minus smallestNum
*/

// function spanOfArray(arr) {
//     let largestNum = Number.MIN_VALUE;
//     let smallestNum = Number.MAX_VALUE;
//     for (let idx = 0; idx < arr.length; idx += 1) {
//         if (arr[idx] < smallestNum) {
//             smallestNum = arr[idx];
//         }
//         if (arr[idx] > largestNum) {
//             largestNum = arr[idx];
//         }
//     }
//     return largestNum - smallestNum;
// }

// console.log(spanOfArray([15, 30, 40, 11, 9]));

/*
Algo: 
- iterate through the array of numbers
    - if the current number is equal to target 
        - return the index 
- return -1
*/
// function findElement(arr, target) {
//     for (let idx = 0; idx < arr.length; idx += 1) {
//         if (arr[idx] === target) {
//             return idx;
//         }
//     }
//     return -1;
// }

// console.log(findElement([15, 30, 40, 4, 11, 9], 400));

/*
input: array of number (number represent the number of stars in the bar)
output: pring the number of stars for each bar

example
[3, 1, 0, 7, 5]
			*		
			*		
			*	*	
			*	*	
*			*	*	
*			*	*	
*	*		*	*


Data structure
array of numbers => print the number of star at index

Algo
- iterate through each row starting at the largest value in the array to 1
    - init str to empty string
    - iterate through the col starting at 1 to the larget value
        - if row is less than or equal to the col value
            - append a star to str
        - else
            - append a space to str
    - print str
*/
// function barChart(arr) {
//     let rows = Number.MIN_VALUE;
//     for (let idx = 0; idx < arr.length; idx += 1) {
//         if (arr[idx] > rows) {
//             rows = arr[idx];
//         }
//     }
//     // console.log(rows);
//     for (let row = rows; row >= 1; row -= 1) {
//         let str = "";
//         for (let col = 0; col < arr.length; col += 1) {
//             //console.log(row, '<=', arr[col]);
//             if (row <= arr[col]) {
//                 //7 <= arr[0] = 3
//                 str += "*\t";
//             } else {
//                 str += "-\t";
//             }
//         }
//         console.log(str);
//     }
// }
// barChart([3, 1, 0, 7, 5]);

/*
Algo
- append the shorter array with 0s at the start to match the length of the other array

init result  to 0
init e to 0
init c to 0
- iterate starting at the end of the arrays until the end of either arrays
    - init sum to the sum of d1, d2 and carry
    - reassign result to the remainder of sum divided by 10 times the weighted place value plus the current result
    - init carry to the sum divided by 10 rounded down
    - increment e by 1
    - if c is greater than 0
        - reassign result to c times the 10 to e
- return result
*/
// function sumOfTwoArrays(arr1, arr2) {
//     let result = 0;
//     let e = 0;
//     let c = 0;
//     let maxLength = Math.max(arr1.length, arr2.length);
//     let minLength = Math.min(arr1.length, arr2.length);

//     let diff = maxLength - minLength;

//     for (let count = 1; count <= diff; count += 1) {
//         if (arr1.length === minLength) {
//             arr1.unshift(0);
//         } else {
//             arr2.unshift(0);
//         }
//     }
//     console.log(arr1, arr2);
//     for (let idx = arr1.length - 1; idx >= 0; idx -= 1) {
//         let sum = arr1[idx] + arr2[idx] + c;
//         console.log(arr1[idx], "+", arr2[idx], "+", c, sum);
//         result += (sum % 10) * 10 ** e;
//         console.log(result);
//         c = Math.floor(sum / 10);
//         e += 1;
//         if (c > 0) {
//             result += c * 10 ** e;
//         }
//     }
//     return result;
// }

// console.log(sumOfTwoArrays([3, 1, 0, 7, 5], [1, 1, 1, 1, 1, 1]));

// function diffOfTwoArrays(arr1, arr2) {
//     let result = 0;
//     let e = 0;
//     let c = 0;
//     let barrow = 0;
//     let d1;
//     let d2;

//     let diff = arr2.length - arr1.length;
//     for (let count = 1; count <= diff; count += 1) {
//         arr1.unshift(0);
//     }

//     for (let idx = arr1.length - 1; idx >= 0; idx -= 1) {
//         d1 = arr1[idx];
//         d2 = arr2[idx];
//         if (d2 - barrow < d1) {
//             c = Math.ceil(d2 + d1 / 10);
//             let diff = c * 10 - barrow + d2 - d1;
//             result = result + (diff % 10) * 10 ** e;
//             barrow = c;
//             e += 1;
//         } else {
//             let diff = d2 - barrow - d1;
//             result += (diff % 10) * 10 ** e;
//         }
//     }
//     if (barrow - d2 > 0) {
//         result += c * 10 ** e;
//     }
//     return result;
// }

// console.log(diffOfTwoArrays([2, 6, 7], [1, 0, 0, 0]));
/*
input: array 
output: array with the elements reversed in place

example
[1,2,3,4,5]
[5,4,3,2,1]

data structure
array of numbers => reversed array mutated

Algo:
- int mid to half the length of the input array rounded down
- iterate through the input array starting at idx equals to 0 then to mid
  - swap the current number with the recipical position of the number at the end of the input array
- return the input array
*/

// function reverseArray(arr) {
//     let mid = Math.floor(arr.length / 2); // 1,2,3,4,5
//     for (let idx = 0; idx < mid; idx += 1) {
//         let temp = arr[idx];
//         arr[idx] = arr[arr.length - 1 - idx];
//         arr[arr.length - 1 - idx] = temp;
//     }
//     return arr;
// }

// console.log(reverseArray([1, 3, 3, 4, 5, 7]));

/*
Problem
input: array of numbers, number (times to the right for positive values and times to the left for negative values)
output: array of numbers rotated in place

Example
[1,2,3,4,5,6]
k = 3 (rotate 3 times to the right)
 3, 4, 5, 1 , 2   
  4, 5, 6, 1, 2, 3

 [1,2,3,4,5,]
k = -3 (rotate 3 times to the right)
 4, 5, 1, 2, 3  

 Data Structure

 Algo
 - if positive k
  - get the last k number of elements from the input array and set them to the beginning of the array
  - get the remainding array and set to the end of the input array
- else
  - geth the first k number of elements from th input array and set them to the end fo the input array
  - get the remainding array and set to the beginning fo the input array
- return the array
*/

/*
- get the rotation number
- get the remainder of k divided by array length
     - if remainder is less than 0 
         reassign remainder to remainder minus array length
- init mid1 to remainder divided by 2 rounded down
- iterate through array starting at 1 to mid1  - 1
    - swap first and last
init mdi2 to array length -1 - remainder + 1 divided by 2  rounded down
- iterate through array starting at remainder + 1 to mid2 
    - swap
iterate through array array 
    - swap first and last element
-return array
*/
// function rotate(arr, k) {
//     let remainder = k % arr.length;
//     if (remainder < 0) {
//         remainder = remainder + arr.length;
//     }
//     console.log(remainder);
//     let mid1 = Math.floor(remainder / 2) - 1;
//     reverseArray(arr, 0, mid1, remainder);
//     let mid2 = remainder + Math.floor((arr.length - 1 - remainder) / 2);
//     console.log("mid2", mid2);
//     reverseArray(arr, remainder + 1, mid2, remainder); ///1, 2, 3, 4, 5 32154
//     reverseArray1(arr);
//     return arr;
// }
// function reverseArray(arr, start, mid, remainder) {
//     //let mid = Math.floor(arr.length / 2); // 1,2,3,4,5
//     console.log("here");
//     let d = 0;
//     let mid1 = Math.floor(remainder / 2) - 1;
//     for (let idx = start; idx <= mid; idx += 1) {
//         let temp = arr[idx];
//         console.log("temp", temp);
//         if (idx <= mid1) {
//             arr[idx] = arr[remainder - idx]; //4 - 3 arr[1]
//             arr[remainder - idx] = temp;
//         } else {
//             arr[idx] = arr[arr.length - (1 + d)];
//             arr[arr.length - (1 + d)] = temp;
//             d += 1;
//         }
//         console.log(arr);
//     }
// }

// function reverseArray1(arr) {
//     let mid = Math.floor(arr.length / 2); // 1,2,3,4,5
//     for (let idx = 0; idx < mid; idx += 1) {
//         let temp = arr[idx];
//         arr[idx] = arr[arr.length - 1 - idx];
//         arr[arr.length - 1 - idx] = temp;
//     }
//     return arr;
// }
// console.log(rotate([1, 2, 3, 4, 5], -3));

/*
Problem 
input: array of numbers
output: new array with values of input array as index and index as value

Example
[4,0,2,3,1] => [1, 4, 2, 3, 0]

Data Structure
array => new array with inverse index and values

Algo
init a new array to an empty array
- iterate through the array of numbers
    - assign the current index value to the new array at position of the current value
- return the new array
*/
// function inverseArr(arr) {
//     let result = [];
//     for (let idx = 0; idx < arr.length; idx += 1) {
//         result[arr[idx]] = idx;
//     }
//     return result;
// }
// console.log(inverseArr([4, 0, 2, 3, 1]));

/*
Problem
input: array of numbers
output: print all possible sub arrays

example
[10, 20, 30]
iteration 1 
[10]
[10, 20]
[10, 20 , 30]
iteration 2
[20]
[20, 30]
interation 3
[30]
 
Data Structure 
array of numbers => print all possible sub arrays

Algo
- iterate through the array of numbers (num1)
    - init sub to an empty array
    - iterate through the array of numbers (num2) to the current num1 
        - push the current num2 to sub
    - print sub 
*/
// function subArray(arr) {
//     for (let num1Idx = 0; num1Idx < arr.length; num1Idx += 1) {
//         //10
//         for (let num3Idx = num1Idx; num3Idx < arr.length; num3Idx += 1) {
//             //10
//             let sub = [];
//             for (let num2Idx = num1Idx; num2Idx <= num3Idx; num2Idx += 1) {
//                 sub.push(arr[num2Idx]);
//             }
//             console.log(sub);
//         }
//     }
// }
// subArray([10, 20, 30]);

/*
binary search
input: array, number
output: index if found else return -1

example
10, 20, 30, 40, 50, 60, 70, 80, 90, 100 find 70
Algo
- init lo at 0
- init hi to length of array
- while low is less or equal to hi
    - init mid to hi - lo divided by 2 rounded down
    - if mid is not equal to target number
        - if mid value is less than target number
            - reassign lo to mid + 1
        - else 
            - reassign hi to mid - 1
    - else 
        - return mid 
- return -1  
*/

// function binarySearch(arr, target) {
//     let lo = 0;
//     let hi = arr.length - 1;
//     while (lo <= hi) {
//         // console.log(lo, hi);
//         let mid = Math.floor(lo + (hi - lo) / 2);
//         if (arr[mid] !== target) {
//             if (arr[mid] < target) {
//                 lo = mid + 1;
//             } else {
//                 hi = mid - 1;
//             }
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 70));

/*
example
[5, 10, 15, 22, 33, 40, 42, 55], 25
0, 7
4, 7
4,4

algo:

call binary search 
    - if no target is found
        -if the lo and hi value is greater than the target value 
            - get the prevous value
        - else
            - get the next value

*/
// function brokenEconomy(arr, target) {
//     let lo = 0;
//     let hi = arr.length - 1;
//     while (lo <= hi) {
//         //console.log(lo, hi);
//         let mid = Math.floor(lo + (hi - lo) / 2);
//         if (arr[mid] !== target) {
//             if (arr[mid] < target) {
//                 lo = mid + 1;
//             } else {
//                 hi = mid - 1;
//             }
//         } else {
//             return target + " is available";
//         }
//     }
//     if (arr[lo] < target) {
//         return [arr[lo], arr[lo + 1]];
//     }
//     return [arr[lo - 1], arr[lo]];
// }
// console.log(brokenEconomy([5, 10, 15, 22, 33, 40, 42, 55], 25));

// console.log(brokenEconomy([7, 14, 18, 25, 30], 18));
// console.log(brokenEconomy([1, 5, 10, 15, 22, 33, 40, 42, 55, 66], 34));

/*
find the index of the target
create a pointer1 starting at the target
create a pointer2 starting at the target
while either is value is equal to target
    if previous value at pointer1 is equal to target
        decrement pointer by 1
    if next value at pointer2 is equal to target 
        increment pointer by 1
return pointer1 and pointer2    
*/
// function firstLastIndex(arr, target) {
//     let indexTarget = binarySearch(arr, target);
//     let pt1Idx = indexTarget;
//     let pt2Idx = indexTarget;
//     console.log(indexTarget);
//     while (arr[pt1Idx - 1] === target || arr[pt2Idx + 1] === target) {
//         if (arr[pt1Idx - 1] === target) {
//             pt1Idx -= 1;
//         }
//         if (arr[pt2Idx + 1] === target) {
//             pt2Idx += 1;
//         }
//     }
//     return [pt1Idx, pt2Idx];
// }
// console.log(
//     firstLastIndex(
//         [1, 5, 10, 15, 22, 33, 33, 33, 33, 33, 40, 42, 55, 66, 77],
//         33
//     )
// );
// function barChart(arr) {
//     let rows = Number.MIN_VALUE;
//     for (let idx = 0; idx < arr.length; idx += 1) {
//         if (arr[idx] > rows) {
//             rows = arr[idx];
//         }
//     }
//     // console.log(rows);
//     for (let row = 1; row <= rows; row += 1) {
//         let str = "";
//         for (let col = 0; col < arr.length; col += 1) {
//             //console.log(row, '<=', arr[col]);
//             if (row <= arr[col]) {
//                 //1<= arr[0] = 3
//                 str += "*\t";
//             } else {
//                 str += "-\t";
//             }
//         }
//         console.log(str);
//     }
// }
// barChart([3, 1, 0, 7, 5]);

/*
input: n - number of rows
       m - number of columns
output: print out the contents of the array

Algo
- iterate through the number of rows
    - iterate through the number of columns
        - print rhe number at row and col
*/
// function print2DArray(arr) {
//     for (let row = 0; row < arr.length; row += 1) {
//         for (let col = 0; col < arr[row].length; col += 1) {
//             console.log(arr[row][col]);
//         }
//     }
// }
// print2DArray([
//     [11, 12, 13, 14],
//     [21, 22, 23, 24],
// ]);

//10, 0, 0,  +
//0, 0, 0,  +
//10, 0, 0, +
//0, 0, 0

// 0, 0 ,0 +
// 0, 20, 20 +
// 0, 0, 0 +
// 0, 40, 0

// [10,0,10,0]
// [0, 40, 0, 40]

/*
Algo 
-  if the number of cols in the first array equal to the number of rows in the second array
    - init result to empty array
    - iterate n1 number of times
    - init sub
      - iterate m2 number of times
      - init sum to 0
        - iterate m1 number of times
      - add m1 + m2 to sum
      - add sum to sub 
    - add sub to result
- return result
- else 
    - return string 'invalid'
*/
// function matrixMultiplication(arr1, arr2) {
//     const result = [];
//     for (let row1 = 0; row1 < arr1.length; row1 += 1) {
//         const sub = [];
//         for (let col2 = 0; col2 < arr2[0].length; col2 += 1) {
//             let sum = 0;
//             for (let col1 = 0; col1 < arr1[0].length; col1 += 1) {
//                 sum += arr1[row1][col1] * arr2[col1][col2];
//             }
//             sub.push(sum);
//         }
//         result.push(sub);
//     }
//     return result.toString();
// }

// console.log(
//     matrixMultiplication(
//         [
//             [10, 0, 0],
//             [0, 20, 0],
//         ],
//         [
//             [1, 0, 1, 0],
//             [0, 1, 1, 2],
//             [1, 1, 0, 0],
//         ]
//     )
// );
/*
0,0, 1,0, 2,0
0,1, 1,1, 2,1
0,2, 1,2, 2,2
Algo
- iterate through each col 0 , 1...
    - iterate through each row 0,0, 1,0, 2,0..
        - print the element at row and col
index: 0, 1, 2 => even, odd, even => 0, 2, 0
*/
// function stateOfWakanda(arr) {
//     for (let col = 0; col < arr[0].length; col += 1) {
//         if (col % 2 === 0) {
//             for (let row = 0; row <= arr.length - 1; row += 1) {
//                 console.log(arr[row][col]);
//             }
//         } else {
//             for (let row = arr.length - 1; row >= 0; row -= 1) {
//                 console.log(arr[row][col]);
//             }
//         }
//     }
// }
// console.log(
//     stateOfWakanda([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ])
// );

/*
[   [11,12,13,14,15]
    [21,22,23,24,25]
    [31,32,33,34,35]
    - on each iteration going down, down one less row  until there is no more rows to transverse
]
*/
function printSpiral(arr) {
    let total = arr.length * arr[0].length;
    let curTotal = 0;
    let col1End = arr.length;
    let row1 = 0;
    let col1 = 0;
    let row2 = arr.length - 1;
    let col3 = arr[0].length - 1;
    let row3 = arr.length - 1;
    let row3End = 0;
    let row4 = 0;
    let stop = false;

    while (curTotal < total) {
        for (let col = col1; col < col1 + 1; col += 1) {
            for (let row = row1; row < col1End; row += 1) {
                console.log(arr[row][col]);
                curTotal += 1;
                // console.log("curTotal C1:", curTotal);
                if (curTotal === total) {
                    return;
                }
            }
        }
        col1End -= 1;
        row1 += 1;
        col1 += 1;

        for (let row = row2; row > row2 - 1; row -= 1) {
            for (let col = col1; col <= arr[row].length - 1 - col1; col += 1) {
                console.log(arr[row][col]);
                curTotal += 1;
                //console.log("curTotal R2:", curTotal);
                if (curTotal === total) {
                    return;
                }
            }
        }
        row2 -= 1;

        for (let col = col3; col > col3 - 1; col -= 1) {
            for (let row = row3; row >= row3End; row -= 1) {
                console.log(arr[row][col]);
                curTotal += 1;
                //console.log("curTotal C3:", curTotal);
                if (curTotal === total) {
                    return;
                }
            }
        }
        col3 -= 1;
        row3 -= 1;
        row3End += 1;

        for (let row = row4; row < row4 + 1; row += 1) {
            for (let col = col3; col >= col1; col -= 1) {
                console.log(arr[row][col]);
                curTotal += 1;
                if (curTotal === total) {
                    return;
                }
            }
        }
        row4 += 1;
    }
}

// console.log(
//     printSpiral([
//         [11, 12, 13, 14, 15],
//         [21, 22, 23, 24, 25],
//         [31, 32, 33, 34, 35],
//         [21, 22, 23, 24, 25],
//     ])
// );

/*
/ define rotation direction
    - if the remainder of count divided by 4 is equal to 
        0 % 4 = 0 => East increment col by 1 and
        1 % 4 = 1 => south increment row by 1
        2 % 4 = 2 => west decrement col by 1 
        3 % 4 = 3 => north decrement row by 1
    

start of with east => increment col by 1
turn 90 (south) => increment row by 1
turn 90 (west) => decrement col by 1
turn 90 (north) => decrement row by 1
east = 0 
south = 1
west = 2
north = 3

- init count to 0;
- init position at row = 0 , col = 0
    - if col undefined
        - return the position of row and col
    - else if value is equal to 1
        - increment count by 1
        - call move 
    - else if row is undefined
        - return the position of row and col
    - else 
        - call move
*/
let count = 0;
let row = 0;
let col = 0;
function endPointMatrix(arr) {
    while (arr[row][col] !== undefined || arr[row][col] !== undefined) {
        if (arr[row][col] === 1) {
            count += 1;
        }
        move();
        console.log("row:", row, "col:", col);
    }
    if (row === undefined) {
        return [row - 1, col];
    } else {
        return [row, col - 1];
    }
}

function move() {
    if (count % 4 === 0) {
        col += 1;
    } else if (count % 4 === 1) {
        row += 1;
    } else if (count % 4 === 2) {
        col -= 1;
    } else if (count % 4 === 3) {
        row -= 1;
    }
}
// console.log(
//     endPointMatrix([
//         [0, 0, 1, 0],
//         [1, 0, 0, 0],
//         [0, 0, 0, 0],
//         [1, 0, 1, 0],
//     ])
// );

/*
how to rotate a matrix 90 degrees
how to tranverse diagonally 
- start of the next row starts at the row index

*/
function rotate90(arr) {
    for (let row = 0; row < arr.length; row += 1) {
        for (let col = row; col < arr.length; col += 1) {
            //console.log(arr[row][col]);
            let temp = arr[row][col];
            arr[row][col] = arr[col][row];
            arr[col][row] = temp;
        }
    }
    for (let r = 0; r < arr.length; r++) {
        console.log(arr[r]);
    }
}
// console.log(
//     rotate90([
//         [11, 12, 13, 14],
//         [21, 22, 23, 24],
//         [31, 32, 33, 34],
//         [41, 42, 43, 44],
//     ])
// );
/*
- init a result array with the specified columns and rows
- init an newArr to an empty array
// transverse the outer ring of the array and add the values to a new array
// rotate the new array
// transverse result and add values from new array 
*/

// console.log(
//     ringRotate([
//         [11, 12, 13, 14, 15, 16, 17],
//         [21, 22, 23, 24, 25, 46, 27],
//         [31, 32, 33, 34, 35, 36, 37],
//         [41, 42, 43, 44, 45, 46, 47],
//         [51, 52, 53, 54, 55, 56, 57],
//         [61, 62, 63, 64, 65, 66, 67],
//     ])
// );

/*
r, c
first interation 0
0, 0 iteration 0
1, 1 iteration 1
2, 2 iteration 2
3, 3 iteration 3
second iteration 1
0, 1 iteration 0
1, 2 iteration 1
2, 3 iteration 2
third iteration 2
0, 2 iteration 0
1, 3 iteration 1
fourth iteration 3
0, 3 iteration 0
init lCol to 0
inti 1Row  to 0
- iterate through the col starting lCol, increment by 1 if less than input length
    - iteration though the row starting at lRow, increment by 1 if less than dLength
        - print the value at row and row + col
    - decrement lRow by 1 
    - increment lCol by 1
*/
// function stateOfWakanda2(arr) {
//     let lCol = 0;
//     let lRow = arr.length;
//     for (let col = lCol; col < arr.length; col += 1) {
//         for (let row = 0; row < lRow; row += 1) {
//             console.log(row, row + col);
//             console.log(arr[row][row + col]);
//         }
//         lRow -= 1;
//         lCol += 1;
//     }
// }

// console.log(
//     stateOfWakanda2([
//         [11, 12, 13, 14],
//         [21, 22, 23, 24],
//         [31, 32, 33, 34],
//         [41, 42, 43, 44],
//     ])
// );
