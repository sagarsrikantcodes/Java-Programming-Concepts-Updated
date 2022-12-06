    /*
     Problem
     - input: number of rows
     - output: nested array of numbers

     - each number is the sum of th tow numbers directly above it 

     - if the number of row is 1 return the array of [[1]]

     Example 
     Input: numRows = 5
     Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

     Data Structure
     number => nested array

     Algo
     - init an empty array called results
     - if numRow is 0 return an emtpy array
 
     - iterate through the array numRows number of times
        - create an empty array called sub
        - if numRow is 1 return add a subarray of 1
        - add 1 to sub
        - iterate through the last element in result to the second last element if array is length is greater than 1
            - get the sum of the first and next element and add to sub
        - add 1 to sub
        - add sub to result
     - return result
     */

     function pascalsTriangle(numRows) {
      
        if (numRows === 0) return [];
        if (numRows === 1) return [[1]];

        const result = [[1]];

        for (let row = 0; row < numRows - 1; row += 1) {
            const sub = [];
            sub.push(1);
            let lastSub = result[result.length - 1]
            for (let subIdx = 0; subIdx < lastSub.length - 1; subIdx += 1) {   
                console.log('row', row, 'idx', subIdx, lastSub[subIdx], lastSub[subIdx + 1]);
                let sum = lastSub[subIdx] + lastSub[subIdx + 1];
                sub.push(sum);
            }    
            sub.push(1);
            result.push(sub);
        }
        return result;
     }

     function printSub(result) {
        for (let idx = 0; idx < result.length; idx += 1) {
            console.log('element', idx, result[idx]);
        }
     }

    //  printSub(pascalsTriangle(0));
    //  printSub(pascalsTriangle(1));
    //  printSub(pascalsTriangle(2));
    //  printSub(pascalsTriangle(3));
    //  printSub(pascalsTriangle(4));
    //  printSub(pascalsTriangle(5));
     printSub(pascalsTriangle(6));
