#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {

    auto maxElement = *std::max_element(candies.begin(), candies.end());
    vector<bool> result;
    for (int i = 0; i < candies.size(); i++)
    {
        result.push_back((candies[i] + extraCandies) >= maxElement);
    }
    return result;
}

int main() {
    vector<int> candies = {2, 3, 5, 1, 3};
    int extraCandies = 3;

    vector<bool> result = kidsWithCandies(candies, extraCandies);

    for (bool val : result) {
        cout << (val ? "true" : "false") << " ";
    }

    cout << endl;
    return 0;
}
