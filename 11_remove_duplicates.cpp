#include <iostream>
#include <vector>

class Solution {
public:
    int removeDuplicates(std::vector<int>& nums) {
        // Step 1: Handle base cases if needed (e.g., empty array)
        // int newNums[] = {}; // This is not allowed in C++ (cannot initialize an array with size 0)
        // std::vector<int> newNums;
        
        // // Step 2: Initialize necessary variables (e.g., two-pointer approach)
        // int output = 1;
        // int n = nums.size();
        // int newNumsSize = nums.size();


        // // Step 3: Iterate through the array and update it in-place

        // while (newNumsSize > 0)
        // {
        //     // Consider all pairs (arr[i], arr[j])
        //     for (int i = 0; i < n; i++) {
        //         for (int j = i + 1; j < n; j++) {
            
        //             // if (nums[i] == nums[j] ) {
        //             //     newNums[output] = nums[i];
        //             //     output++;
        //             // } else
        //             // {
        //             //     newNums[output] = nums[i];
        //             //     output++;
        //             // }
        //             //The logic does not correctly store only unique elements.
        //             // Instead, you should compare each element with the previous and add only if it’s new.
                    
        //             if (nums[i] != nums[j]) {
        //                 newNums[output] = nums[i];
        //                 output++;

        //             } else {
        //                 newNums[output] = nums[i];
        //                 output++;
        //             }


        //     }
        //     newNumsSize--;
        // }
        // }
        
        
        // // Step 4: Return the count of unique elements
        // return output;

        if (nums.size() == 0) 
        {
            return 0;
        }

        int output = 1;

        for (int i = 1; i < nums.size(); i++)
        {
            if (nums[i] != nums[i - 1])
            {
                nums[output] = nums[i];
                output++;
            }
        }

        return output;
    }
};

int main() {
    Solution solution;
    
    // Example test case
    std::vector<int> nums = {0,0,1,1,1,6,2,1,4,5,1}; 
    int k = solution.removeDuplicates(nums);
    
    // Print the first k unique elements
    std::cout << "Unique count: " << k << std::endl;
    std::cout << "Modified array: ";
    for (int i = 0; i < k; i++) {
        std::cout << nums[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}
