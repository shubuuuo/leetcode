#include <iostream>
#include <string>
#include <vector>

class Solution {
public:
    int maxnum(const std::string& s) {
        std::cout << "Today, we are going to print the maximum number after splitting the string into two parts and counting all the zeros from the left and ones from the right.\n";

        int maxScore = 0;
        int leftZeros = 0;       // Count of zeros in the left substring
        int rightOnes = 0;       // Count of ones in the right substring

        // Precompute the total number of ones in the string
        for (char ch : s) {
            if (ch == '1') rightOnes++;
        }

        // Iterate through the string to calculate scores
        for (int i = 0; i < s.length() - 1; i++) {
            if (s[i] == '0') {
                leftZeros++;
            } else if (s[i] == '1') {
                rightOnes--;
            }

            // Calculate the score for the current split
            int score = leftZeros + rightOnes;
            maxScore = std::max(maxScore, score);
        }

        return maxScore;
    }
};

int main() {
    Solution solution;
    std::string nums = "1111"; 
    int result = solution.maxnum(nums); 
    std::cout << "The result is: " << result << std::endl; 
    return 0;
}