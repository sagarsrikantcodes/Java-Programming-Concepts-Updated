/*
- iterate through the array 
    - if the value is equal to val
        shift elements from the right to the left by 1
        - iterate from the current element to the to second last element
            - reassign the current element to the next element
- init count to 0
- iterate through the array 
    if the value is not equal to val
    - increment count

[3,2,2,3], val = 3
2, 2, 2, 3
2, 2, 2, 3
2, 2, 3, 3
*/

// function removeElement(arr, target) {
//     let result = 0;
//     let count = 0; 
//     for (let idx = 0; idx < arr.length - (1 + count); idx += 1) {
//         console.log(arr);
//         if (arr[idx] === target) {
//             for (let idx1 = idx; idx1 < arr.length - 1; idx1 += 1) {
//                 arr[idx1] = arr[idx1 + 1];
//             }   
//             count += 1;  
//         }
//         if (arr[idx] === target) {
//             idx -= 1;
//         }
//         // console.log(arr[idx]);
//     }
//     for (let idx = 0; idx < arr.length; idx ++) {
//         if (arr[idx] !== target) {
//             result += 1;
//         }
//     }
//     return result;
// }

function removeElement(arr, target) {
    let i = 0; 
    for (let j = 0; j < arr.length; j += 1) {
        if (arr[j] !== target) {
            arr[i] = arr[j];
            i += 1;

        }
    }
    console.log(arr);
    return i;
}

console.log(removeElement([3,2,2,3],3));
console.log(removeElement([0,1,2,2,3,0,4,2],2)); 
/*
i = 0
at j = 0, 0 != 2, i = 0
i = 1
at j = 1, 1 != 2, i = 1
i = 2
at j = 2, 2 != 2  (skip)
i = 2 
at j = 3, 2 != 2, skip
i = 2
at j = 4, 3 != 2, 2 is reassigned to 3, i = 3
i = 3
at j = 5  0 != 2; 2 is reassigned to 0; i = 4
i = 4
at j = 6 4 ! = 2, 3 is reassigned to 4, i = 5
i = 5
at j = 7, 2 != 2  skip

0, 1, 3, 0, 4, 2, 4, 2



*/
