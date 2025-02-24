#include <iostream>
#include <vector>

using namespace std;

// Function to find all valid combinations
void findCombinations(vector<int>& candidates, int target, vector<int>& current, int index, vector<vector<int>>& result) {
    // **Base Case: If target is 0, we found a valid combination**
    if (target == 0) {
        result.push_back(current);
        return;
    }

    // **Recursive Case: Iterate through candidates from 'index'**
    for (int i = index; i < candidates.size(); i++) {
        // **Prune: If the current element is greater than target, skip it**
        if (candidates[i] > target) continue;

        // **Include candidates[i] in the current combination**
        current.push_back(candidates[i]);

        // **Recursively call for reduced target (can reuse same element)**
        findCombinations(candidates, target - candidates[i], current, i, result);

        // **Backtrack: Remove last added element**
        current.pop_back();
    }
}

vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
    vector<vector<int>> result;  // Stores all valid combinations
    vector<int> current;         // Stores the current combination

    // Start backtracking
    findCombinations(candidates, target, current, 0, result);

    return result;
}

int main() {
    vector<int> candidates = {2, 3, 6, 7};
    int target = 7;

    vector<vector<int>> result = combinationSum(candidates, target);

    // Print results
    cout << "Valid Combinations:\n";
    for (auto& combination : result) {
        cout << "[ ";
        for (int num : combination) {
            cout << num << " ";
        }
        cout << "]\n";
    }

    return 0;
}
