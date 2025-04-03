#include <iostream>
#include <string>
#include <sstream> // For splitting words
#include <vector>  // For storing words
#include <algorithm> // For reverse()

using namespace std;

string reverseWords(string s) {
    // Step 1: Remove leading, trailing, and extra spaces
    stringstream ss(s);
    vector<string> words;
    string word, result;

    // Step 2: Store words in a vector
    while (ss >> word) {
        words.push_back(word);
    }

    // Step 3: Reverse the words
    reverse(words.begin(), words.end());

    // Step 4: Construct the final string
    for (int i = 0; i < words.size(); i++) {
        result += words[i];
        if (i != words.size() - 1) {
            result += " "; // Add space between words
        }
    }

    // Step 5: Return the final result
    return result;
}

int main() {
    // Example test cases
    string s = "  hello world  ";
    
    cout << "\"" << reverseWords(s) << "\"" << endl; // Expected Output: "world hello"

    return 0;
}
