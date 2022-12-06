public class TwoSum {
    public static void main(String[] args) {
        int[] arr1 = {2,7,11,15};
        int[] arr2 = {3,2,4};
        int[] arr3 = {3,3};
        int target1 = 9;
        int target2 = 6;
        int target3 = 6;
        System.out.println(twoSum(arr1, target1));
        System.out.println(twoSum(arr2, target2));
        System.out.println(twoSum(arr3, target3));
    }

    /*
    Problem
    - input: array of integers
             there will always be two elements at least and 104 at the most
             target and elements are form -109 to 109
    - output: array of two indices ( only one answer exist)

    - find the indices that add to the target number
    

    Examples
    
    Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    
    Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    
    Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]

    Data Structure
    - array of numbers => array containing two indices

    Aglo 0(n)
    - if the input array has a length of 2 return an array containing 0 and 1
    - create a hashmap the contains the number as the key and the index as the value
    - iterate through the array
        - assign the number as the key and the value as the index at array
    -  iterate through the array
        - get the difference
        - if the difference exists in the hashmap 
            - return the current index and the value at key
     */
    public static int[] twoSum(int[] arr, int target) {
        int[] indices = new int[2];
        if (arr.length == 2) {       
            int[] edgeIndices = {0,1};  
            return edgeIndices;
        }
        Map<Integer, Integer> hash = new HashMap<Integer, Integer>();
        for (int i = 0; i < arr.length; i++) {
            hash.put(arr[i], i);
        }

        for (int j = 0; j < arr.length; j++) {
            int diff = target - arr[j];
            if (hash.containsKey(diff)) {
                int[] indices1 = {j, hash.get(diff)};
                return indices1;
            }
        }
    }
}
