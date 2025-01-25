#include <iostream>
#include <vector>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::cout << "Today, We are going to print the indices of two numbers.\n";
        for (int i = 0; i < nums.size(); i++) {
            for (int j = i + 1; j < nums.size(); j++) {
                if (nums[i] + nums[j] == target) {
                    std::cout << "[" << i << "," << j << "]" << '\n';
                    return {i, j};
                }
            }
        }
        return {}; // Return empty vector if no solution is found
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = {2, 7, 11, 15};
    int target = 18;
    solution.twoSum(nums, target);
    return 0;
}