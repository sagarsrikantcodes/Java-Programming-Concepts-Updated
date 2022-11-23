import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) {
        String[] arr1 = {"flower", "flow", "flight"}; // fl
        String[] arr2 = {"interspecies", "interstellar", "interstate"};
        String[] arr3 = {"throne", "dungeon"};
        String[] arr4 = {"throne", "throne"};
        String[] arr5 = {"dog", "racecar", "car"};
        String output1 = commonPrefix(arr1);
        String output2 = commonPrefix(arr2);
        String output3 = commonPrefix(arr3);
        String output4 = commonPrefix(arr4);
        String output5 = commonPrefix(arr5);
        System.out.println(output1); // prints fl
        System.out.println(output2); // prints inters
        System.out.println(output3); // prints ""
        System.out.println(output4); // prints throne
        System.out.println(output5); // prints ""
        //System.out.println(commonPrefix({"dog", "racecar", "car"}));
        //System.out.println(commonPrefix({"interspecies", "interstellar", "interstate"}));
        //System.out.println(commonPrefix({"throne", "dungeon"}));
        //System.out.println(commonPrefix({"throne", "throne"}));
    }
    
    public static String commonPrefix(String[] arr) {
        String str = "";
        // int count = 1;
        int k = 0;
        
        while(k < arr[0].length()) {
            int count = 1;
            for (int i = 1; i < arr.length; i++) {
                if(arr[0].charAt(k) == arr[i].charAt(k)) {
                    count++;
                }
            }
            
            if (count == arr.length) {
                str += arr[0].charAt(k);
            } else {
                break;
            }
            
            k++;
        }
      
        return str;
    }
}

