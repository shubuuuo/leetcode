#include <iostream>
#include <vector>

class Solution {
public:
    int missing(std::vector<int>& arr, int target) {
        
        int n = arr.size();

        int sum = n * (n + 1) / 2;
        int sum2 = 0;

        for (int i = 0; i < n; i++)
        {
            sum2 += arr[i];
        }
        
        return sum - sum2;
    }
};

int main() {
    Solution solution;
    std::vector<int> arr = {0, 1, 2, 4, 5};
    int target = 5;
    int result = solution.missing(arr, target);
    std::cout << result;
    return 0;
}
