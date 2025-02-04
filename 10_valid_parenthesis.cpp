#include <iostream>
#include <stack>

class Solution {
public:
    bool isValid(std::string s) {

        std::stack<int> num;

        for (int i = 0; i < s.length(); i++)
        {
            if (s.at(i) == '(' || s.at(i) == '[' || s.at(i) == '{')
            {
                num.push(s.at(i));
            }
            else if (s.at(i) == ')' && !num.empty() && num.top() == '(')
            {
                num.pop();
            }
            else if (s.at(i) == ']' && !num.empty() && num.top() == '[')
            {
                num.pop();
            }
            else if (s.at(i) == '}' && !num.empty() && num.top() == '{')
            {
                num.pop();
            }
            else
            {
                return false;
            }
            
        }
        return num.empty();
    }
};

int main() {
    Solution solution;
    
    std::string test1 = "()";
    std::cout << std::boolalpha << solution.isValid(test1) << std::endl; // Expected output: true
    
    std::string test2 = "()[]{}";
    std::cout << std::boolalpha << solution.isValid(test2) << std::endl; // Expected output: true
    
    std::string test3 = "([}}])";
    std::cout << std::boolalpha << solution.isValid(test3) << std::endl; // Expected output: false
    
    std::string test4 = "([])";
    std::cout << std::boolalpha << solution.isValid(test4) << std::endl; // Expected output: true

    return 0;
}