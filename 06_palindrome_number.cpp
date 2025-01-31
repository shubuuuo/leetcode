#include <iostream>
#include <vector>
#include <string>

class Solution {
public:
    bool isPalindrome(int x) {
    
        if (x < 0) {
            return false;
        }

        std::string str = std::to_string(x);
        int n = str.size();
        for (int i = 0; i < n/2; i++) {
            if (str[i] != str[n-i-1]) {
                return false;
            }
        }
        return {true};
    }
};

int main() {
    Solution solution;
    int x = 121;
    bool result = solution.isPalindrome(x);
    if (result) {
        std::cout << x << " is a palindrome." << std::endl;
    } else {
        std::cout << x << " is not a palindrome." << std::endl;
    }
    return 0;
}