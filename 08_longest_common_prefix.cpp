#include <iostream>
#include <vector>

class Solution {
public:
     std::string longestCommonPrefix(std::vector<std::string>& strs) {
        if (strs.empty()) {
            return ""; // Handle edge case: empty input
        }

        // Start with the first string as the prefix
        std::string prefix = strs[0];

        // Compare prefix with each string in the array
        for (int i = 1; i < strs.size(); i++) {
            while (strs[i].find(prefix) != 0) { 
                // Shorten the prefix until it matches
                prefix = prefix.substr(0, prefix.size() - 1);
                if (prefix.empty()) {
                    return ""; // No common prefix exists
                }
            }
        }

        return prefix; // Return the longest common prefix
    }
};

int main() {
    Solution solution;
    std::vector<std::string> strs1 = {"flower", "flower", "flower"};
    std::string result1 = solution.longestCommonPrefix(strs1);
    std::cout << "Longest common prefix: " << result1 << std::endl;
    std::vector<std::string> strs2 = {"flower", "flow", "flowing"};
    std::string result2 = solution.longestCommonPrefix(strs2);
    std::cout << "Longest common prefix: " << result2 << std::endl;
    return 0;
}