#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        
        int low = 0, high = nums.size() - 1;

        if (nums[high] < target)
        {
            low = high + 1;
        }
        for (int i = 0; i <= high; i++)
        {
            if (nums[i] == target)
            {
                low = i;
                break;
            } else if (nums[i] > target)
            {
                low = i;
                break;
            } 
        }
        
        return low;
    }
};

int main() {
    vector<int> nums = {1, 3, 5, 6};  // Example sorted array
    int target = 5; // Example target value

    Solution obj;
    int result = obj.searchInsert(nums, target);

    cout << "Index: " << result << endl;
    return 0;
}

// ChatGPT solution if wnyone interested:-
// // Step 1: Initialize the search boundaries
// int low = 0, high = nums.size() - 1;

// // Step 2: Perform Binary Search
// while (low <= high) {
//     int mid = low + (high - low) / 2; // Avoid overflow

//     // Case 1: If target is found, return its index
//     if (nums[mid] == target) {
//         return mid;
//     }
//     // Case 2: If target is greater, search right half
//     else if (nums[mid] < target) {
//         low = mid + 1;
//     }
//     // Case 3: If target is smaller, search left half
//     else {
//         high = mid - 1;
//     }
// }

// // Step 3: If target is not found, return the insertion index (low)
// return low;