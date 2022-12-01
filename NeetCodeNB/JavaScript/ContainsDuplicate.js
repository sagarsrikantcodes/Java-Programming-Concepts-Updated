 /*
     Problem
     - input: array of nums
     - output: boolean 

     - if any value appears at least twice in the array return true 
     - return false if every element is unique

     Example
     Input: nums = [1,2,3,1]
     Output: true 
     Input: nums = [1,2,3,4]
     Output: false   
     Input: nums = [1,1,1,3,3,4,3,2,4,2]
     Output: true

     Data Structure 
     - array of number => boolean

     Algo  
     - Method 1 (O(n2))
     - create an empty array called uniqueNums
     - iterate through the input array 
        - if the current number does not exist in uniqueNums 
            - add the number to uniqueNums
        - else return true
    - return false

    - Method 2 (O(n))
    - init an empty object called result    
    - iterate through the input array
        - if the current number does not exist in result
            - create the key and set value to 1
        - else
            - set increment the value at key by 1
        - if the value at current key is equal to 2
            - return true
    - return false
     */