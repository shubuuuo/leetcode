#include <iostream>
#include <vector>
#include <climits>

using namespace std;

bool increasingTriplet(vector<int>& nums) {
    int first = INT_MAX;
    int second = INT_MAX;

    for (int num : nums) {
        if (num <= first) {
            first = num; // smallest so far
        } else if (num <= second) {
            second = num; // second smallest so far
        } else {
            // Found a number greater than both -> triplet exists
            return true;
        }
    }

    return false;
}

int main() {
    vector<int> nums = {2, 1, 5, 0, 4, 6}; // Example
    cout << (increasingTriplet(nums) ? "true" : "false") << endl; // Output: true
    return 0;
}
