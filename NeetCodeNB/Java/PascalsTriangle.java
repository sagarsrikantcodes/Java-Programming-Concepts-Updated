public class PascalsTriangle {
    public static void main(String[] args) {
        System.out.println(pascalsTriangle(1));
    }

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

     public static int[][] pascalsTriangle(int numRows) {

        int[][] result = new int[numRows][numRows];
        if(numRows == 0) {
            return result;
        }
        for (int i = 1; i <= numRows; i++) {
            int[] sub = new int[i];
            sub[i] = 1;
            if (numRows == 1) {
                result[i] = sub;
            }
        }
        return result;
     }

}
