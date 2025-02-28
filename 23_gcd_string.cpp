#include <iostream>
#include <string>
#include <algorithm> // For __gcd()

using namespace std;

string gcdOfStrings(string str1, string str2) {
    // Step 1: If concatenation is different, no common divisor exists
    if (str1 + str2 != str2 + str1) {
        return "";
    }

    // Step 2: Compute GCD of lengths
    int gcd_length = __gcd(str1.size(), str2.size());

    // Step 3: Return the substring of that length
    return str1.substr(0, gcd_length);
}

int main() {
    string str1 = "ABCABC";
    string str2 = "ABC";
    
    cout << gcdOfStrings(str1, str2) << endl; // Output: "ABC"

    return 0;
}
