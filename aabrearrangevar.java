
import java.util.ArrayList;
import java.util.Arrays;

public class aabrearrangevar {

    public int[] rearrange(int[] nums) {
        int n = nums.length;
        int[] positives = new int[n];
        int[] negatives = new int[n];
        int posCount = 0;
        int negCount = 0;

        // Separate positive and negative numbers
        for (int i = 0; i < n; i++) {
            if (nums[i] >= 0) {
                positives[posCount++] = nums[i];
            } else {
                negatives[negCount++] = nums[i];
            }
        }
        
        // Rearrange numbers in alternate order
        int posIndex = 0;
        int negIndex = 0;
        int resultIndex = 0;
        
        // Place numbers alternately
        while (posIndex < posCount && negIndex < negCount) {
            nums[resultIndex++] = positives[posIndex++];
            nums[resultIndex++] = negatives[negIndex++];
        }
        
        // Place remaining positive numbers
        while (posIndex < posCount) {
            nums[resultIndex++] = positives[posIndex++];
        }
        
        // Place remaining negative numbers
        while (negIndex < negCount) {
            nums[resultIndex++] = negatives[negIndex++];
        }
        
        return nums;
    }
    
    public static void alternateNumbers(ArrayList<Integer> a) {
        ArrayList<Integer> positives = new ArrayList<>();
        ArrayList<Integer> negatives = new ArrayList<>();

        int size = a.size();

        for (int i = 0; i < size; i++) {
            if (a.get(i) < 0) {
                negatives.add(a.get(i));
            } else {
                positives.add(a.get(i));
            }
        }

        if (positives.size() > negatives.size()) {
            for (int i = 0; i < negatives.size(); i++) {
                a.set(i * 2, positives.get(i));
                a.set(i * 2 + 1, negatives.get(i));
            }
            int index = negatives.size() * 2;
            for (int i = negatives.size(); i < positives.size(); i++) {
                a.set(index++, positives.get(i));
            }
        } else {
            for (int i = 0; i < positives.size(); i++) {
                a.set(i * 2, positives.get(i));
                if (i < negatives.size()) {
                    a.set(i * 2 + 1, negatives.get(i));
                }
            }
            int index = positives.size() * 2 - 1;
            for (int i = positives.size(); i < negatives.size(); i++) {
                a.set(index++, negatives.get(i));
            }
        }
    }

    public static void main(String[] args) {
        

        // ArrayList<Integer> a = new ArrayList<>(Arrays.asList(1, -2, 3, -4, 5, 7, -8));
        // ArrayList<Integer> a = new ArrayList<>(Arrays.asList(1, -2, 3, -4, 5, 7, -8, 9));
        ArrayList<Integer> a = new ArrayList<>(Arrays.asList(1, 5, -2, 3, 9, -4, 7, -8, 10));

        aabrearrangevar rearranger = new aabrearrangevar();
        int[] nums = rearranger.rearrange(a.stream().mapToInt(i -> i).toArray());
        a = new ArrayList<>(Arrays.stream(nums).boxed().toList());
        System.out.println(a);
        System.out.println("Rearranging numbers in alternate order:");
        aabrearrangevar.alternateNumbers(a);
        System.out.println(a);
        
        System.out.println("Rearranging numbers in alternate order using ArrayList:");
        a = new ArrayList<>(Arrays.asList(1, -2, 3, -4, 5, 7, -8));
        aabrearrangevar.alternateNumbers(a);
        System.out.println(a);
        
    }
}
