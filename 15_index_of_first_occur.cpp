#include <iostream>
#include <string>

class Solution {
public:
    int strStr(std::string haystack, std::string needle) {
        return haystack.find(needle); // Returns first occurrence index or -1 if not found
    }
};

int main() {
    Solution solution;
    
    std::string haystack = "sadbutsad";
    std::string needle = "but";
    
    std::cout << "Index: " << solution.strStr(haystack, needle) << std::endl;

    return 0;
}
