#include <iostream>
#include <vector>
#include <algorithm>

class Solution {
public:
    double findMedianSortedArrays(std::vector<int>& nums1, std::vector<int>& nums2) {
        // Combined array
        std::vector<int> totalArray;

        // Merge nums1 and nums2 into totalArray
        totalArray.insert(totalArray.end(), nums1.begin(), nums1.end());
        totalArray.insert(totalArray.end(), nums2.begin(), nums2.end());

        // Sort the combined array
        std::sort(totalArray.begin(), totalArray.end());

        // Calculate median
        int totalSize = totalArray.size();
        double median;
        if (totalSize % 2 == 0) {
            // Even number of elements
            median = (totalArray[totalSize / 2 - 1] + totalArray[totalSize / 2]) / 2.0;
        } else {
            // Odd number of elements
            median = totalArray[totalSize / 2];
        }

        return median;
    }
};

int main() {
    Solution solution;
    std::vector<int> nums1 = {1, 3};
    std::vector<int> nums2 = {2, 4};

    // Calculate and print the median
    double median = solution.findMedianSortedArrays(nums1, nums2);
    std::cout << "Median: " << median << std::endl;

    return 0;
}
