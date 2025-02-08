#include <iostream>
#include <vector>

class Solution {
public:
    int removeElement(std::vector<int>& nums, int val) {
        int count = 0; // Pointer for the new array size

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != val) { 
                nums[count] = nums[i]; // Move valid elements forward
                count++;
            }
        }
        
        return count;
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = { 2, 3, 4, 5, 5, 6, 5 };
    int val = 5;
    
    int k = solution.removeElement(nums, val);
    
    std::cout << "Count after removal: " << k << std::endl;
    std::cout << "Modified array: ";
    for (int i = 0; i < k; i++) {
        std::cout << nums[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}
