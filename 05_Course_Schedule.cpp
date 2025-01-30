#include <iostream>
#include <vector>

class Solution {
public:
    std::vector<bool> checkifPrerequisites(int numCourses, std::vector<std::vector<int>>& prerequisites, std::vector<std::vector<int>>& queries) {
        // Create a 2D table to track if a course is a prerequisite for another
        std::vector<std::vector<bool>> isPrerequisite(numCourses, std::vector<bool>(numCourses, false));

        // Mark direct prerequisites
        for (const auto& pair : prerequisites) {
            isPrerequisite[pair[0]][pair[1]] = true;
        }

        // Use Floyd-Warshall algorithm to compute transitive prerequisites
        for (int k = 0; k < numCourses; ++k) {
            for (int i = 0; i < numCourses; ++i) {
                for (int j = 0; j < numCourses; ++j) {
                    if (isPrerequisite[i][k] && isPrerequisite[k][j]) {
                        isPrerequisite[i][j] = true;
                    }
                }
            }
        }

        // Check each query
        std::vector<bool> result;
        for (const auto& query : queries) {
            result.push_back(isPrerequisite[query[0]][query[1]]);
        }

        return result;
    }
};

int main() {
    Solution solution;
    int numCourses = 2;
    std::vector<std::vector<int>> prerequisites = {{1, 0}};
    std::vector<std::vector<int>> queries = {{0, 1}, {1, 0}};
    
    std::vector<bool> result = solution.checkifPrerequisites(numCourses, prerequisites, queries);

    // Output the results
    for (bool res : result) {
        std::cout << (res ? "true" : "false") << std::endl;
    }

    return 0;
}
