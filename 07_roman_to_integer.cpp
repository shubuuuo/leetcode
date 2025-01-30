#include <iostream>
#include <vector>

class Solution {
public:
    int romanToInt(std::string s) {
        std::string str = s;
        int n = str.size();
        int result = 0;
        for (int i = 0; i < n; i++) {
            if (i < n - 1) {
                if (str[i] == 'I' && str[i + 1] == 'V') {
                    result += 4;
                    i++;
                    continue;
                } else if (str[i] == 'I' && str[i + 1] == 'X') {
                    result += 9;
                    i++;
                    continue;
                } else if (str[i] == 'X' && str[i + 1] == 'L') {
                    result += 40;
                    i++;
                    continue;
                } else if (str[i] == 'X' && str[i + 1] == 'C') {
                    result += 90;
                    i++;
                    continue;
                } else if (str[i] == 'C' && str[i + 1] == 'D') {
                    result += 400;
                    i++;
                    continue;
                } else if (str[i] == 'C' && str[i + 1] == 'M') {
                    result += 900;
                    i++;
                    continue;
                }
            }
            if (str[i] == 'I') {
                result += 1;
            } else if (str[i] == 'V') {
                result += 5;
            } else if (str[i] == 'X') {
                result += 10;
            } else if (str[i] == 'L') {
                result += 50;
            } else if (str[i] == 'C') {
                result += 100;
            } else if (str[i] == 'D') {
                result += 500;
            } else if (str[i] == 'M') {
                result += 1000;
            }
        }
        
        return {result};
    }
};

int main() {
    Solution solution;
    std::string s = "MCMXCIV";
    int result = solution.romanToInt(s);
    std::cout << result << std::endl;
    return 0;
}