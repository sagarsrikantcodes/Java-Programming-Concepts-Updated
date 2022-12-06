public class IsSubsequence {
    public static void main(String[] args) {
         
    	String s1 = "ace";
    	String t1 = "abcde";
   	 
    	String s2 = "aec";
    	String t2 = "abcde";
   	 
    	String s3 = "abc";
    	String t3 = "ahbgdc";
   	 
    	String s4 = "axc";
    	String t4 = "ahbgdc";
   	 
    	boolean Output1 = isSubseq(s1, t1);
    	boolean Output2 = isSubseq(s2, t2);
    	boolean Output3 = isSubseq(s3, t3);
    	boolean Output4 = isSubseq(s4, t4);
   	 
    	System.out.println(Output1);
    	System.out.println(Output2);
    	System.out.println(Output3);
    	System.out.println(Output4);
    }


    /*
    init position to 0
    - iterate through the array 
        - get the index position that current char was foung
        - if position is - 1 
            - return false
        - else
            - reassign position to  position + 1
    - return true
        
    */

    public static boolean isSubseq(String s, String t) {
        int position = 0; 
        for (int i = 0; i < s.length(); i++) {
            int indexFound = t.indexOf(s.charAt(i), position);
            if (indexFound == -1) {
                return false;
            } else {
                position = indexFound + 1; 
            }
        }
        return true;
	}

    /*
     Optimized o(n): two pointers

     - while the count 1 and count2 are less than the lenght of input string 1 and input string 2



     */

}
