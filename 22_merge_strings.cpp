#include <iostream>
#include <string>

using namespace std;

string mergeAlternately(string word1, string word2) {
    int minLength = min(word1.size(), word2.size());
    string mergedstring;

    // Step 1: Merge characters alternately
    for (int i = 0; i < minLength; i++) {
        mergedstring += word1[i];
        mergedstring += word2[i];
    }

    // Step 2: Append remaining characters
    if (word1.size() > word2.size()) {
        mergedstring += word1.substr(minLength);
    } else if (word2.size() > word1.size()) {
        mergedstring += word2.substr(minLength);
    }

    return mergedstring;
}

int main() {
    string word1 = "abc";
    string word2 = "pqr";

    string result = mergeAlternately(word1, word2);
    cout << "Merged String: " << result << endl;  // Output: "apbqcr"

    return 0;
}
