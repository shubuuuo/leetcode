#include <bits/stdc++.h>
#include <vector>
#include <unordered_map>


class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::map<int, int> mpp; 
        int n = nums.size();
        for (int i = 0; i < n; ++i) {
            int num = nums[i];
            int moreNeeded = target - num;
            if (mpp.find(moreNeeded) != mpp.end()) {
                return {mpp[moreNeeded] + 1, i + 1};
            }
            mpp[nums[i]] = i;
        }
        return {-1, -1}; 
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    std::vector<int> result = solution.twoSum(nums, target);
    
    if (result[0] != -1) {
        std::cout << "Indices: " << result[0] << ", " << result[1] << std::endl;
    } else {
        std::cout << "No two sum solution found." << std::endl;
    }
    
    return 0;
}
