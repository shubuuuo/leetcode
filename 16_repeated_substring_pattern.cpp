#include <iostream>
#include <string>

class Solution {
public:
    int strStr(std::string s) {
        std::string substring = "";
        for (int i = 1; i < s.size(); i++)
        {
            if (s.substr(0, i))
            {
                /* code */
            }
            
        }
    }
};

int main() {
    Solution solution;
    
    std::string s = "ababa";
    
    std::cout << "Index: " << solution.strStr(s) << std::endl;

    return 0;
}
