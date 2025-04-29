#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    string convertBelowThousand(int num) {
        vector<string> below_20 = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
                                   "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen",
                                   "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
        vector<string> tens = {"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};

        string result;

        if (num >= 100) {
            result += below_20[num / 100] + " Hundred ";
            num %= 100;
        }

        if (num >= 20) {
            result += tens[num / 10] + " ";
            num %= 10;
        }

        if (num > 0) {
            result += below_20[num] + " ";
        }

        return result;
    }

    string numberToWords(int num) {
        if (num == 0) return "Zero";

        string result;

        if (num >= 1000) {
            result += convertBelowThousand(num / 1000) + "Thousand ";
            num %= 1000;
        }

        result += convertBelowThousand(num);
        return result;
    }
};

int main() {
    Solution solution;
    int number = 1800;
    string words = solution.numberToWords(number);
    cout << words << endl;
    return 0;
}
