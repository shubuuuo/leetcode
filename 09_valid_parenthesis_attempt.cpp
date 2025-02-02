#include <iostream>
#include <stack>

class Solution
{
public:
    bool isValid(std::string s)
    {
        if (s.length() % 2 != 0 || s.length() == 1)
        {
            return false;
        }
        else if (s.length() == 0)
        {
            return true;
        }
        else if (s.at(0) == ')' || s.at(0) == ']' || s.at(0) == '}')
        {
            return false;
        }
        else if (s.at(s.length() - 1) == '(' || s.at(s.length() - 1) == '[' || s.at(s.length() - 1) == '{')
        {
            return false;
        }

        for (int i = 0; i < s.length(); i++)
        {
            int n = s.length() - i - 1;
            if (s.at(i) == '(' && s.at(i + 1) == ')' || s.at(i) == '[' && s.at(i + 1) == ']' || s.at(i) == '{' && s.at(i + 1) == '}')
            {
                return true;
            }
            else if (s.at(i) == '(' && s.at(n) == ')' || s.at(i) == '[' && s.at(n) == ']' || s.at(i) == '{' && s.at(n) == '}')
            {
                for (int j = 1; j < s.length() - i; j++)
                {
                    int m = s.length() - j - 1;
                    if (s.at(j) == '(' && s.at(j + 1) == ')' || s.at(j) == '[' && s.at(j + 1) == ']' || s.at(j) == '{' && s.at(j + 1) == '}')
                    {
                        return true;
                    }
                    else if (s.at(j) == '(' && s.at(m) == ')' || s.at(j) == '[' && s.at(m) == ']' || s.at(j) == '{' && s.at(m) == '}')
                    {
                        for (int k = 1; k < s.length() - j; k++)
                        {
                            int o = s.length() - k - 1;
                            if (s.at(k) == '(' && s.at(k + 1) == ')' || s.at(k) == '[' && s.at(k + 1) == ']' || s.at(k) == '{' && s.at(k + 1) == '}')
                            {
                                return true;
                            }
                            else if (s.at(k) == '(' && s.at(o) == ')' || s.at(k) == '[' && s.at(o) == ']' || s.at(k) == '{' && s.at(o) == '}')
                            {
                                return true;
                            }
                            else
                            {
                                return false;
                            }
                        }
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            else
            {
                return false;
            }
        }
        return false;
    }
};

int main()
{
    Solution solution;

    std::string test1 = "()";
    std::cout << std::boolalpha << solution.isValid(test1) << std::endl; // Expected output: true

    std::string test2 = "()[]{}";
    std::cout << std::boolalpha << solution.isValid(test2) << std::endl; // Expected output: true

    std::string test3 = "(]";
    std::cout << std::boolalpha << solution.isValid(test3) << std::endl; // Expected output: false

    std::string test4 = "([])";
    std::cout << std::boolalpha << solution.isValid(test4) << std::endl; // Expected output: true

    std::string test5 = "(){}}{";
    std::cout << std::boolalpha << solution.isValid(test5) << std::endl; // Expected output: false

    std::string test6 = "({{{{}}}))";
    std::cout << std::boolalpha << solution.isValid(test6) << std::endl; // Expected output: false

    std::string test7 = "([}}])";
    std::cout << std::boolalpha << solution.isValid(test7) << std::endl; // Expected output: false

    return 0;
}