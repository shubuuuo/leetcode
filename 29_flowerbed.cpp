#include <iostream>
#include <vector>

using namespace std;

bool canPlaceFlowers(vector<int>& flowerbed, int n) {
    int count = 0;
    int size = flowerbed.size();

    for (int i = 0; i < size; i++) {
        if (flowerbed[i] == 0) {
            bool leftEmpty = (i == 0) || (flowerbed[i - 1] == 0);
            bool rightEmpty = (i == size - 1) || (flowerbed[i + 1] == 0);

            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1; // Plant a flower here
                count++;
                if (count >= n) return true;
            }
        }
    }
    
    return count >= n;
}

int main() {
    vector<int> flowerbed = {1, 0, 0, 0, 1};
    int n = 1;

    cout << (canPlaceFlowers(flowerbed, n) ? "true" : "false") << endl;

    return 0;
}
