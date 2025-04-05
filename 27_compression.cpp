#include <iostream>
#include <vector>
#include <string>

using namespace std;

int compress(vector<char>& chars) {
    int write = 0;
    int read = 0;
    int n = chars.size();

    while (read < n) {
        char currentChar = chars[read];
        int count = 0;

        // Count the occurrences of the current character
        while (read < n && chars[read] == currentChar) {
            read++;
            count++;
        }

        // Write the character to the array
        chars[write++] = currentChar;

        // Write the count only if it's more than 1
        if (count > 1) {
            string countStr = to_string(count);
            for (char c : countStr) {
                chars[write++] = c;
            }
        }
    }

    return write;
}

int main() {
    vector<char> chars = {'a','a','b','b','c','c','c'};
    int compressedLength = compress(chars);

    cout << "Compressed Length: " << compressedLength << endl;
    cout << "Compressed Array: ";
    for (int i = 0; i < compressedLength; i++) {
        cout << chars[i] << " ";
    }
    cout << endl;

    return 0;
}
