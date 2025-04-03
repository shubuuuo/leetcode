#include <iostream>
#include <vector>

using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    
    vector<int> result(n, 1);
    
    // Step 1: Compute prefix product
    int prefix = 1;
    for (int i = 0; i < n; i++) {
        result[i] = prefix;  // Store prefix product
        prefix *= nums[i];   // Update prefix
    }

    // Step 2: Compute suffix product & multiply with prefix
    int suffix = 1;
    for (int i = n - 1; i >= 0; i--) {
        result[i] *= suffix;  // Multiply with suffix product
        suffix *= nums[i];    // Update suffix
    }
    
    return result;
}

int main() {
    // Example test cases
    vector<int> nums = {1, 2, 3, 4};
    
    vector<int> output = productExceptSelf(nums);
    
    // Print the result
    for (int num : output) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}
