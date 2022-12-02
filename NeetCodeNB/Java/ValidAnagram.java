package NeetCode.Java;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ValidAnagram {
    /*
     Problem 
     - input: two strings (s, t)
     - output: boolean 

     - returns true if t is an anagram of s and false if not

     - anagramis a word or phrase formed by rearranging the letters of a different word or phrase, all letters are used once

     example
     Input: s = "anagram", t = "nagaram"
     Output: true
     Input: s = "rat", t = "car"
     Output: false

     Data Structure
     - string => boolean

     Algo 
     - method 1
     - sort the both array in ascenging order
     - compare the each char from each array to each other

     - method 2
     - convert the second string to array of chars
     - iterate through the first string 
        - init charFound to false
        - iterate through the second array of characters 
            - if the first string char is equal to the second string current char
                - remove the current char 
                - reassign charFound to true
                - break
        - if charFound is false
            - return false   
    - return true

    - method 3:  create a hashmap 
    - create hashmap for both input strings
    - iterate through both strings assuming they are the same in length
        * do the step below for both strings
        - if the map contains the current char as a key 
            - increment its value by 1 
        - else 
            - add the key and set its value to 1
        
    - compare the two hashmaps if the same
        - return true
    - return false

     */
    public static void main(String[] args) {
        String s1 = "anagram";
        String s2 = "rat";
        String t1 = "nagaram";
        String t2 = "car";
        // System.out.println(validAnagram(s1, t1));
        // System.out.println(validAnagram(s2, t2));
        // System.out.println(validAnagramOpt(s1, t1));
        // System.out.println(validAnagramOpt(s2, t2));
        System.out.println(validAnagramOpt2(s1, t1));
        System.out.println(validAnagramOpt2(s2, t2));
    }

    public static boolean validAnagramOpt(String str1, String str2) {
        HashMap<Character, Integer> hm1 = new HashMap<>();
        HashMap<Character, Integer> hm2 = new HashMap<>();

        populateHash(hm1, str1);
        populateHash(hm2, str2);

        if (hm1.equals(hm2)) {
            return true;
        }
      return false;

    }

    public static void populateHash(HashMap<Character, Integer> hm, String str) {
        for (int i = 0; i < str.length(); i++) {
            if (hm.containsKey(str.charAt(i))) {
                hm.put(str.charAt(i), hm.get(str.charAt(i)) + 1);
            } else {
                hm.put(str.charAt(i), 1);
            } 
        }
    }

    public static boolean validAnagram(String str1, String str2) {
        ArrayList<Character> chars2 = new ArrayList<Character>();
        for (int i = 0; i < str2.length(); i++) {
            chars2.add(str2.charAt(i));
        }

        for (int j = 0; j < str1.length(); j++) {
            boolean charFound = false;
            for (int k = 0; k < chars2.size(); k++) {
                if (str1.charAt(j) == chars2.get(k)) {
                    chars2.remove(k);
                    charFound = true;
                    break;
                }
            }
            if (!charFound) {
                return false;
            }
        }
        return true;
    }

    /*
    Manual Hash Method
    - create a array of count1 and count2 with a length of 25
    - iterate through the first string input
       - call populateCount (count1,char)
       - call populateCount (count2, char)
    - check if count1 and count2 is has the same key value pairs, if so
        - return true
    - return false
        
    - define populateCount(count, char)
        - get the index value of count1 array by getting the difference of the current char  and 'a'
        - increment the value at index of difference
     */

     public static boolean validAnagramOpt2(String str1, String str2) {
        int[] count1 = new int[25];
        int[] count2 = new int[25];
        
        populateCount(count1, str1);
        populateCount(count2, str2);
     
        System.out.println(Arrays.toString(count1));
        System.out.println(Arrays.toString(count2));
   
        return Arrays.equals(count2, count1);
  
     }

     public static void populateCount(int[] count, String str) {
        for (int i = 0; i < str.length(); i++) {
            count[str.charAt(i) - 'a']++;
        }       
     }
}
