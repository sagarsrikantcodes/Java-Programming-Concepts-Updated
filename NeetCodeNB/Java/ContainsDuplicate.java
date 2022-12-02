package NeetCode.Java;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ContainsDuplicate {
    public static void main(String[] args) {
      int[] arr1 = {1,2,3,1};
      int[] arr2 = {1,2,3,4};
      int[] arr3 = {1,1,1,3,3,4,3,2,4,2};
      // System.out.println(containsDuplicates(arr1));
      // System.out.println(containsDuplicates(arr2));
      // System.out.println(containsDuplicates(arr3));

      System.out.println(containsDuplicatesOpt(arr1));
      System.out.println(containsDuplicatesOpt(arr2));
      System.out.println(containsDuplicatesOpt(arr3));
      
    }

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
    - method 1 (O(n2))
    - iterate through each number called num1 in input array stop at second last element of input array
        - iterate through the each number called num2 in the input array starting at the next element
            - if num1 is eqaul to to num2 and if 
                - return true
    - return false

    - method 2 (O(n))
    - create an object of Set class of integer type
    - add all elements from array to set
    - if length of set is not equal to lenght of input array 
      - return true
    - else
      - return false
      */

      public static boolean containsDuplicates (int[] arr) {
        Set<Integer> uniqueNums = new HashSet<Integer>();
        for (int i = 0; i < arr.length; i++) {
          uniqueNums.add(arr[i]);
        }
        if (uniqueNums.size() != arr.length) {
          return true;
        } 
        return false;
      }

      /*
      Method using array O(n)
      Algo
      - init an indexArr with values of 0 based on length of input array
      - iterate through the input array of numbers
        - if the value at index of the current number of index Arr 0
          - append 1 to the indexArr arry at index of current number
        - else 
          - return true 
      - return false
       */
      public static boolean containsDuplicatesOpt(int[] arr) {
        int[] indexArr = new int[arr.length + 1];
        //System.out.println(Arrays.toString(indexArr));
        for (int i = 0; i < arr.length; i++) {
          if (indexArr[arr[i]] == 0 ) {
            //System.out.println(indexArr[arr[i]]);
            indexArr[arr[i]] = 1;
            //System.out.println(Arrays.toString(indexArr));
          } else {
            return true;
          }
        }
        return false;
      }
}
