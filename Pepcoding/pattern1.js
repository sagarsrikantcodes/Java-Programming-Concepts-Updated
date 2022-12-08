/*
11:22 (14 minutes)
Problem
- input: number
- output: none

print a patern of * seperated by tab as shown in output format

Example
2
*
* *

Data Structure
number => print of a pattern to console

number => iterate n times to print n lines
    - on each iterate start with printing one star and increment start by one on each iteration

Algo
    - iterate n times (number of rows)
        - init empty string called stars
        - iterate n times ( number of stars)
            - add star to stars
        - print starts the console

*/

// function pattern1(rows) {
//     for (let row = 1; row <= rows; row += 1) {
//         let stars = "";
//         for (let count = 1; count <= row; count += 1) {
//             stars += '*\t';
//         }
//         console.log(stars);
//     }
// }

// pattern1(6);

/*
11:45
Problem
- input: number
- output: none

- print out the pattern of * and seperated by tab

Example
5
*	*	*	*	*	
*	*	*	*	
*	*	*	
*	*	
*

data structure 
- number of rows => string of stars and tabs decrement by 1 after each iteration

Algo
- iterate through the number of rows
    - init an empty string
    - iterate through the number stars starting with the number of row of stars and decrementing by 1 until number stars is 0
        - append star and tab
    - print the string

*/
// function pattern2(rows) {
//     for (let row = 1; row <= rows; row += 1) {
//         let string = "";
//         for (let count = rows - (row - 1); count >= 1; count -= 1) {
//             string += "*\t";
//         }
//         console.log(string);
//     }
// }

// pattern2(5);

/*
1:48 
Problem
- input: number of rows
- output: none
- print a pattern of * and separated by tab

- example
5

				*	
			*	*	
		*	*	*	
	*	*	*	*	
*	*	*	*	*	

Data Structure
- number of rows => print number of rows of starting starting with one star and increment by 1 on each iteration

Algo
- iterate through the number of rows
    - init str to empty string
    - iterate number of row times minus current row times (starting with rows minus 1) (initialized to count, until count is less than or equal to row, increment count by 1)
        - append empty space to str
    - iterate number of row times (intialized to count1) until count1 is less than or eqaul to row, increment count1 by1
        - append star
    - print string to the console

*/

// function pattern3(rows) {
//     for (let row = 1; row <= rows; row += 1) {
//         let str = " ";
//         //3 - 1 = 2 
//         //3 - 2 = 1 

//         for (let count = rows - row; count >= 1; count -= 1) {
//             str += " \t";
//         }
//         console.log(str);

//         for (let count1 = 1; count1 <= row; count1 += 1) {
//             str +="*\t"
//         }
//         console.log(str);
//     }
// }

// pattern3(5);

/*
Problem
- input: number
- output:none

print the pattern

Example
5
		*	
	*	*	*	
*	*	*	*	*	
	*	*	*	
		*	

Data Structure
number of row => each row is print with the specifice stars

Algo
- get the mid point of the input number and init to midpoint
- iterate midpoint rows number of times
    - init str to emtpy string
    - iterate starting at the count1 intialized to midpoint when count1 is greater or equal to 1 keep decrementing by 1
        - append empty space to str
        
    - iterate starting count2 at 1 and increment by 2 when count2 is less than rows
        - append start to str
- print string
- reassign str to empty string

- iterate starting at 1, when count is less than or eqaul to rows increment count
    append star to str
-print string
reasign str to empty string

- iterate midpoint rows number of times
    - iterate starting at count3 equals to 1 when count is less than or equal to midpoint increment count3 by 1
        -append space to str
    - iterate starting at count4 at row minus 2 when count is greater of eqaul to 1 decrement count by 2
        - append star to str
- print str
*/

// function pattern5(rows) {
//     let midRows = Math.floor(rows / 2);
//     console.log(midRows);
//     //console.log(midRow);
//     // let count1 = Math.floor(n/2);
//     for (let row = 1; row <= rows; row += 1) {
//         let str = "";
//         // 2 - (1 - 1) => 2
//         // 2  - (2 - 1) => 1
//         for (let count1 = rows - (row - 1); count1 >= 1; count1 -= 1){
//             str += "*\t";      
//         }
//         // 1, 1 <= 1 => *
//         // 3, 1 <= 2 => *
//         // 3, 2 <= 2 => *
//         // while the 

//         for (let count2 = 1; count2 <= row; count2 += 1) { 
//             if(count2 === 1) {
//                 str += "%\t";
//             } else {
//                 str += "%\t%\t";
//             }
       
//         }
  

//         // if (row <= Math.floor(rows / 2) ) {
//         //     count1 -= 1;
//         // } else {
//         //     count1 += 1;
//         // }
//         // console.log(str);
//     }
   
// }


// function pattern5(rows) {
//     let spaces = Math.floor(rows/2); // 5
//     let stars = 1;
//     for (let row = 1; row <= rows; row += 1) {
//         let str = "";

//         for (let count1 = 1; count1 <= spaces; count1 += 1){
//             str += "*\t";      
//         }

//         for (let count2 = 1; count2 <= stars; count2 += 1) { 
//                 str += "%\t";

//         }

//         if (row <= Math.floor(rows / 2)) { // 6 <= 5
//             console.log(row, '<=', Math.floor(rows / 2))
//             spaces -= 1;
//             stars += 2;
//         } else {
//             console.log(row, '<=', Math.floor(rows / 2))
//             spaces += 1;
//             stars -= 2;
//         }
//         console.log(str);
//     }
   
// }

// pattern5(11);

/*
5:32 (15 minutes)
Problem
- input: number of rows
- output: number of rows of spaces and stars

- example
5
*	*	*	*	*	
	*	*	*	*	
		*	*	*	
			*	*	
				*

Data Structure
number of rows => print number of rows with stars and tabs

Algo
- number of stars start with number of rows
- number of spaces starts with 0

- int stars to number of rows
- int spaces to zero
- iterate through number of rows
    init str to empty string
    - iterate spaces starting at zero to number of rows
        append space to str
    - iterate stars startintg 1 to number of rows
        - append start to str
- increment spaces 
- decrement stars
*/

// function pattern4(rows) {
//     let stars = rows;
//     let spaces = 0; 

//     for (let row = 1; row <= rows; row += 1) {
//         let str = "";
//         for (let count1 = 1; count1 <= spaces; count1 += 1) {
//             str += "_\t";
//         }
//         for (let count2 = 1; count2 <= stars; count2 += 1) {
//             str += "*\t";
//         }
//         spaces += 1;
//         stars -= 1;
//         console.log(str);
        
        
//     }
// }

// console.log(pattern4(5));

/*
5:54 ( 20 minutes)
Problem
- input: odd number of rows
- output: none

- prints the rows of stars and spaces 

Examples
5
*	*	*		*	*	*	
*	*				*	*	
*						*	
*	*				*	*	
*	*	*		*	*	*	
Data Structure
number of rows => print out the strin of each row

Algo

- get number of stars which is the number of rows divided by 2 rounded up
- get number of spaces which starts at 1 
- iterate through the number of rows
 

    - init str to an empty string

    - iterate stars at 1 to number of stars
        - append stars to str
    - iterate spaces at at 1 to number of spaces
        - append spaces to str

    - iterate start at 1 tp number of start
        - append stars to str
    
    - if the current row is less than the number of rows divided by 1 rounded up 
        - decrement stars by 1
        - increment spaces by 2
    - else
        - incerment stars by 1
        - decrement spaces by 2
    
    */

//     function pattern6(rows) {
//            let stars = Math.ceil(rows / 2);
//             let spaces = 1; 
//         for (let row = 1; row <= rows; row += 1) {
//             let str = "";

//             for (let count1 = 1; count1 <= stars; count1 += 1) {
//                 str += "*\t";
//             }
//             for ( let count2 = 1; count2 <= spaces; count2 += 1) {
//                 str += "-\t";
//             }
//             for (let count3 = 1; count3 <= stars; count3 += 1) {
//                 str += "*\t";
//             }
            
//             if(row < Math.ceil(rows / 2 )) {      
//                 stars -= 1;
//                 spaces += 2;
//             } else {
//                 stars += 1;
//                 spaces -= 2;
//             }
//             console.log(str);
//         } 
        
//     }
// pattern6(11);

/*
Problem
- input: number of rows
- output: none

prints out the string

Example
5

*	
	*	
		*	
			*	
				*

Data Structure 
number of rows => print each row with specified spaces and stars

Algo
- starting space is at 0

- iterate through the number of rows
    init a str to an empty string
    - iterate the number of spaces 
        - append the spaces to the str
    - append a star to the str
    - increment spaces by 1
    - print the str
*/

// function pattern7(rows) {
//     let spaces = 0;
    
//     for (let row = 1; row <= rows; row += 1) {
//         let str = "";
//         for (let count = 1; count <= spaces; count += 1) {
//             str += "-\t";
//         }
//         str += "*";
//         spaces += 1;
//         console.log(str);
//     }
// }

// pattern7(2);

/*
Algo:
- init spaces to the number of rows - 1 
- iterate through the number of rows
    - init a str to an empty string
    - iterate through the number of spaces
        - append the spaces to str
    - append a star to str
    - decrement spaces
    - print str 
*/

// function pattern8(rows) {
//     let spaces = rows - 1; 
//     for (let row = 1; row <= rows; row += 1) {
//         let str = "";
//         for (let count = 1; count <= spaces; count += 1) {
//             str += "-\t";
//         }
//         str += "* \t";
//         spaces -= 1; 
//         console.log(str);
//     }
// }
// pattern8(10);

/*
Problem
- input: number of rows
- output: none

- print out each row with the specified strings

Examples
*				*	
	*		*		
		*			
	*		*		
*				*	

Data Structure 



Aglo

- init spaces to 0 
- init mid to half of the number of rows rounded up 
- init spaces2 to number of rows minus 2

- iterate through the number of rows
    - init an empty str
    - iterate the number of spaces 
        - append spaces to str
    - append stars to str
    - iterate the number of spaces2
        - append spaces to str
    - append stars to str
    - if the row is less than the mid
        - increment spaces
        - decrement spaces2 by 2
    - else 
        - decrement spaces
        - decrement spaces2 by 2
    - print the str
    
*/

// function pattern9(rows) {
//     let spaces1 = 0; 
//     let mid = Math.ceil(rows / 2);
//     let spaces2 = rows - 2; 

//     for (let row = 1; row <= rows; row += 1) {
//         let str = "";
//         for (let count1 = 1; count1 <= spaces1; count1 += 1) {
//             str += "-\t";
//         }
//         str += "*\t";

//         for (let count2 = 1; count2 <= spaces2; count2 +=1) {
//             str += "-\t";
//         }
//         // console.log(spaces2);

//         if (!spaces2 <= 1) {
//             str += "*\t";
//         }
        

//         if (row < mid) {
//             spaces1 += 1;
//             spaces2 -= 2;
//         } else {
//             spaces1 -= 1;
//             spaces2 += 2;
//         }
        
//         console.log(str);
//     }
// } 

// pattern9(5);

/*
Algo
- get the console to print a star to the last position of the iteration
- on each iteration print the position move by l to the left

- iterate through each row
    - init str to empty string
    - iterate through each column
        if the row and column add up to the input value plus 1 or row and col are equal
            - append a star
        - else
            - append a space
    - print str to console
*/

// function pattern9(rows) {
//     for (let row = 1; row <= rows; row += 1) {
//         let str = "";
//         for (let col = 1; col <= rows; col += 1) {
//             if (col + row === rows + 1 || col === row) {
//                 str += "*\t";
//             } else {
//                 str += "-\t"; 
//             }
//         }
//         console.log(str);
//     }
// }

// pattern9(5);

/*
Algo:
- init spaces2 to -1; 
- get space and init to number of row divided by 2 rounded down
- iterate through the number of rows
    - init str to empty string
    - iterate through the number spaces 
        - append space to str
    - append star to str
    - iterate througn number of spaces2 {
        - append spaces to str
    = asppend star to str
    - if the row is less than or equal to half the input rows rounded down
        - decrement space by 1
    else 
        - increment spaces by 1
    print str

*/

// function pattern10(rows) {
//     let spaces1 = Math.floor(rows / 2);
//     let spaces2 = -1
    
//     for (let row = 1; row <= rows; row += 1) {
//         let str = "";
//         for (let count1 = 1; count1 <= spaces1; count1 += 1) {
//             str += "-\t";
//         }
//         str += "*\t";

//         for (let count2 = 1; count2 <= spaces2; count2 += 1 ) {
//             str += "-\t";
//         }
//         if (row !== 1) {
//             str += "*\t";
//         }

//         if (row <= Math.floor(rows / 2)){
//             spaces1 -= 1;
//             spaces2 += 2; 
//         } else {
//             spaces1 += 1; 
//             spaces2 -= 2;
//         }

//         console.log(str);
//     }
// }
// pattern10(7);
/*
Algo:
- init count to 1
- iterate row number of times
    - init string to empty array
    - iterate row number of times
        - append the count value to string
        increment count
    - print the string
*/
// function pattern11(rows) {
//     let count = 1; 
//     for (let row = 1; row <= rows; row += 1) {
//         let str = "";
//         for (let col = 1; col <= row; col += 1) {
//            str += count + " "; 
//            count += 1; 
//         }
        
//        console.log(str);
//     }
// }

// pattern11(5);
/*
Algo:
init first to 0 
init second to 1
- iterate through the number of rows 
    - init an emtpy str
    - iterate number of rows times
        - apppend first to empty str
        - init third to first + second 
        - reassign first to second 
        - reassign second to third
    - print str
*/
// function pattern12(rows) {
//     let first = 0; 
//     let second = 1;
//     for (let row = 1; row <= rows; row += 1) {
//         let str = " ";
//         for (let col = 1; col <= row; col += 1) {
//             str += first + "\t";
//             let third = first + second;
//             first = second;
//             second = third;
//         }
//         console.log(str);
//     }
// } 
// pattern12(5);
/*
Algo:
1 * (1 - 0) / 0 + 1 = 1 
1 * (1 - 1) / 1 + 1 = 2 
1 * (2 - 1) / 1 + 1 = 1/2 = 0 
create an empty array called first 


*/

/*
Algo:

*/

/*
Algo:
- interate 10 of times starting at 1
    print to the console the number * the count = the number times count
*/
// function  pattern14(number) {
//     for (let count = 1; count <= 10; count += 1) {
//         console.log(number, '*', count, '=', number * count);
//     }
// }
// pattern14(5);
/*
Algo:
- init space to half of the rows rounded up
- init num to - 1
- iterate rows number of times  
    - init str to empty string

    - iterate space number of times
        - append space to str
    - iterate num number of times
        - append 1 to str

    - if the row is less than half of the rows rounded up
        - decrement space
        - increment number by 2
    - else
        - increment space 
        - decrement number by 2
    - print str
*/
// function pattern15(rows) {
//  let spaces = Math.floor(rows / 2);
//  let num = 1;
//  let value = 1; 
 

//  for (let row = 1; row <= rows; row += 1) {
//     let value1 = value;
//     let str = "";
//     for (let count1 = 1; count1 <= spaces; count1 += 1) {
//         str += "\t";
//     }
//     for (let count2 = 1; count2 <= num; count2 += 1) {
//         str +=  value1 + "\t";
//         // value1 += 1;
//         if (count2 < Math.ceil(num / 2)) {
//             value1 += 1;
//         } else {
//             value1 -= 1;
//         }
//     }
//     if (row <= Math.floor(rows / 2)) {
//         spaces -= 1; 
//         num += 2;
//         value += 1;
//     } else {
//         spaces += 1;
//         num -= 2;
//         value -= 1;
//     }
//     console.log(str);
//  }
// }

// pattern15(5);
/*
Algo:
init num to 1
init space number of rows times 2 minus 3

- iterate number of rows
    - init str to empty string
    - iterate number of num 
        - append num
    - iterate number of spaces
        - append spaces to str
    - iterate number of num
        - append num to str
    - increment num by 1
    - incresmtn spaces by 2
    - print str
    - incre
*/

// function pattern16(rows) {
//     let num = 1;
//     let spaces = (rows * 2) - 3;


//     for (let row = 1; row <= rows; row += 1 ) {
//         let str = " ";
//         let val = 1;
//         for (let count1 = 1; count1 <= num; count1 += 1) {
//             str += val + '\t';
//             val += 1;
//         }
//         for (let count2 = 1; count2 <= spaces; count2 += 1) {
//             str += '-\t';
//         }
//         if (row === rows) {
//             num -= 1;
//             val -= 1;
//         }

//         for (let count3 = 1; count3 <= num; count3 += 1) {
//             val -= 1;
//             str += val + '\t';
        
//         }
//         num += 1;
//         spaces -= 2;
//         console.log(str);
//     }
// }

// pattern16(7);


/*
Algo: 
init spaces to half the number of rows minus rounded down

- iterate through number of rows
    - init str to empty str
    - iterate number of spaces
        - if row is not is mid row 
            - append spaces
        - else 
            - append stars 
    - iterate number of stars based on number of rows
        - append stars str
    - print str
*/

// function pattern17(rows) {
//     let spaces = Math.floor(rows / 2);
//     let stars = 1;

//     for (let row = 1; row <= rows; row += 1){
//         let str = "";
//         for (let count1 = 1; count1 <= spaces; count1 += 1) {
//             if (row === Math.ceil(rows / 2)) {
//                 str += "*\t";
//             } else {
//                 str += "-\t";
//             }         
//         }
//         for ( let count2 = 1; count2 <= stars; count2 += 1) {
//             str += "*\t";
//         }

//         if (row <= Math.floor(rows / 2)) {
//             stars += 1;
//         } else {
//             stars -= 1;
//         }
//         console.log(str);
//     }
// }
// pattern17(11);

/*
Algo 

- iterate through number of rows 
    - init str to empty string
    - iterate through the column starting at 1 to rows
    - if the col is equal to 1 OR rows 
    - OR if row is mid and col is between 1 and rows and col is row 
    - OR col is equal to rows - row
        - add star
    - else
        add space
    print str    
*/

function pattern20(rows) {
    let mid = Math.ceil(rows / 2);
    console.log(mid);
    for (let row = 0; row <= rows; row += 1) {
        let str = "";
        for (let col = 1; col <= rows; col += 1) {
            if ((col === rows || col === 1) || (row >= mid && col > 1 && col < rows) && ( col === row || (rows - (row - 1)) === col)) {
                str += "*\t";
            } else {
                str += "-\t";
            }
        }
        console.log(str);
    }
}

pattern20(11);