#include <iostream>
#include<math.h>

int main() {

    std::cout << "boardanging numbers.\n";
    
    int board[][3] = {{1, 2, 3}, {4, 0, 5}};
    int rows = sizeof(board) / sizeof(board[0]);
    int columns = sizeof(board[0]) / sizeof(board[0][0]);
    int temp;

    for (int i = 0; i < rows; i++)
    {

        for (int j = 0; j < columns; j++)
        {
            std::cout << board[i][j] << " ";
        }
        
        std::cout << '\n';
    }

   int totalElements = rows * columns;

    // Flatten and sort the 2D board
    for (int pass = 0; pass < totalElements - 1; pass++) {
        for (int index = 0; index < totalElements - pass - 1; index++) {
            // Calculate row and column indices
            int r1 = index / columns, c1 = index % columns;
            int r2 = (index + 1) / columns, c2 = (index + 1) % columns;

            if (board[r1][c1] > board[r2][c2]) {
                // Swap elements
                int temp = board[r1][c1];
                board[r1][c1] = board[r2][c2];
                board[r2][c2] = temp;
            }
        }
    }
   

    for (int i = 0; i < rows; i++)
    {

        for (int j = 0; j < columns; j++)
        {
            std::cout << board[i][j] << " ";
        }
        
        std::cout << '\n';
    }
    

    return 0;
}