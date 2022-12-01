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

     Algo:

    - method 1:  create a hashmap 
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