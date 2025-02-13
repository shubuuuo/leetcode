#include <iostream>

int main() {

    
    std::cout << "********CGPA CALCULATOR*********" << '\n';

    float phy, maths, de, ctp, pns, total, your_marks;

    std::cout << "Enter total Marks: " << '\n';
    std::cin >> total;

    std::cout << "Enter your Physics marks: " << '\n';
    std::cin >> phy;
    std::cout << "Enter your Maths marks: " << '\n';
    std::cin >> maths;
    std::cout << "Enter your Digital Electronics marks: " << '\n';
    std::cin >> de;
    std::cout << "Enter your Computational Thinking & Programming marks: " << '\n';
    std::cin >> ctp;
    std::cout << "Enter your Probabilty & Statistics marks: " << '\n';
    std::cin >> pns;

    your_marks = (phy + maths + de + ctp + pns)/10;

    if (your_marks > 8)
    {
        std::cout << "You will get job because you have " << your_marks << " score." << '\n';
    }
    else 
    {
        std::cout << "You will not get job & your life is ruined because you have " << your_marks << " score." << '\n';
    }
    
    return 0;
}