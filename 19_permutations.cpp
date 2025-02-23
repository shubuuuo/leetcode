#include <iostream>
#include <vector>

using namespace std;

// Function to generate permutations using backtracking
void generatePermutations(vector<int>& nums, int index, vector<vector<int>>& result) {
    // Base Case: If we have processed all elements, store the current permutation
    if (index == nums.size()) {
        result.push_back(nums);
        return;
    }
    
    // Try swapping current index with each subsequent element
    for (int i = index; i < nums.size(); i++) {
        swap(nums[index], nums[i]);  // Swap
        generatePermutations(nums, index + 1, result);  // Recurse
        swap(nums[index], nums[i]);  // Backtrack (restore original order)
    }
}

// Main function to return all permutations
vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> result;  // Store all permutations
    generatePermutations(nums, 0, result);  // Start recursion from index 0
    return result;
}

// Driver code
int main() {
    vector<int> nums = {1, 2, 3}; 
    vector<vector<int>> permutations = permute(nums);
    
    // Print all permutations
    for (auto perm : permutations) {
        cout << "[ ";
        for (int num : perm) {
            cout << num << " ";
        }
        cout << "]\n";
    }
    
    return 0;
}

