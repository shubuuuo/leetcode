#include<bits/stdc++.h>
#include<vector>

std::vector<int> superiorElements(std::vector<int> &arr) {
    std::vector<int> result;
    int maxi = INT_MIN;
    int n = arr.size();

    for (int i = n - 1; i >= 0; i--)
    {
        if (arr[i] > maxi)
        {
            result.push_back(arr[i]);
        }
        maxi = std::max(maxi, arr[i]);
    }
    std::sort(result.begin(), result.end());
    return result;
}

int main() {
    std::vector<int> arr = {16, 17, 4, 3, 5, 2};
    std::vector<int> leaders = superiorElements(arr);
    
    std::cout << "Superior elements are: ";
    for (int elem : leaders) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;

    return 0;
}
