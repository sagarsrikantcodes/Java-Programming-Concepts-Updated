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

function decimalToBase(d, b) {
    let str = "";
    while (d > 0) {
        // console.log(d, "%", b);
        str = (d % b) + str;
        d = Math.floor(d / b);
    }
    return str;
}

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

function baseToDecimal(n, b) {
    let exponent = 0;
    let decimal = 0;
    while (n > 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);
        let value = digit * b ** exponent;
        decimal += value;
        exponent += 1;
    }
    return decimal;
}

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
function baseAddition(b, num1, num2) {
    let value = 0;
    let carry = 0;
    let e = 0;
    while (num1 > 0 || num2 > 0) {
        let digit1 = num1 % 10;
        let digit2 = num2 % 10;
        // console.log(digit1, digit2);
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / b);
        let curVal = sum % b;
        // console.log("curVal", curVal);
        value += curVal * 10 ** e;
        e += 1;
    }
    if (carry > 0) {
        value += carry * 10 ** e;
    }
    //console.log("val", value);
    return value;
}

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

function baseMultiplication(b, n1, n2) {
    let value = 0;
    let ee = 0;
    while (n2 > 0) {
        // let d2 = n2 % 10;
        let d2 = (n2 % 10) * b ** ee;
        console.log("ee:", ee);
        ee += 1;
        n2 = Math.floor(n2 / 10);
        let c = 0;
        let curVal = 0;
        let e = 0;
        //console.log("n2", n2, "d2", d2);
        n1c = n1;
        while (n1c > 0) {
            let d1 = n1c % 10;
            //console.log("d1", d1);
            n1c = Math.floor(n1c / 10);

            let mult = d1 * d2 + c;
            // console.log(d1, "*", d2, "+", c, mult);
            //console.log("mult", mult, "%", b, mult % b);
            curVal += (mult % b) * 10 ** e;
            // console.log("curDig", curVal);
            //console.log("curVal", curVal);
            c = Math.floor(mult / b);
            // console.log("C:", c);
            e += 1;
        }
        if (c > 0) {
            curVal += c * 10 ** e;
        }
        console.log("curVal", curVal);
        value = baseAddition(b, value, curVal);
        console.log("value", value);
    }
    return value;
}

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
console.log(baseMultiplication(8, 2156, 743));
