#include <iostream>
#include <string>
using namespace std;

int lengthOfLastWord(string s) {
    // Using Brute Force method
    int i = s.size() - 1, length = 0;

    // Step 1: Ignore trailing spaces
    while (i >= 0 && s[i] == ' ') {
        i--;
    }

    // Step 2: Count the length of the last word
    while (i >= 0 && s[i] != ' ') {
        length++;
        i--;
    }

    return length;
}

int main() {
    string s;
    cout << "Enter a string: ";
    getline(cin, s);  // Taking input with spaces
    cout << "Length of last word: " << lengthOfLastWord(s) << endl;
    return 0;
}
