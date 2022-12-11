import java.util.*;

public class DigitFrequency {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int d = scn.nextInt();
        int f = getDigitFrequency(n, d);
        System.out.println(f);
    }
    
    /*
    Problem 
    - input: number(n), digit(d)
            numbers from 0 to the 10 ^9

    - output: number (frequency)
            digits from 0 to 9
    
    - find the number of times the digit (d) occurs in number(n)
    
    Example
    994543234, 4
    output = 3
    
    Data Structure
    number of n and d => number frequency
    
    Algo
    init count to 0
    - while the n is greater than 0
        -> get each digit in the number 
        - get the remainder of n and init to curDigit
        - reassign n to n divided by 10 
            - if the curDigit is equal to d 
                - increment count by 1
    - return count
    */

    public static int getDigitFrequency(int n, int d) {
        int count = 0;
        while (n > 0) {
            int curDigit = n % 10;
            n /= 10;
            if (curDigit == d) {
                count += 1;
            }
        }
        return count;
    }
}