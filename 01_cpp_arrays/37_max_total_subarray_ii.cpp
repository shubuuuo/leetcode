#include <vector>
#include <algorithm>
#include <climits>
#include <queue>
#include <tuple>

class SegmentTree {
    std::vector<int> tree;
    bool isMinTree;
    int n;

public:
    SegmentTree(const std::vector<int>& nums, bool flag) : isMinTree(flag) {
        n = nums.size();
        tree.resize(4 * n);
        build(0, 0, n - 1, nums);
    }

    void build(int node, int start, int end, const std::vector<int>& nums) {
        if (start == end) {
            tree[node] = nums[start];
            return;
        }
        int mid = start + (end - start) / 2;
        build(2 * node + 1, start, mid, nums);
        build(2 * node + 2, mid + 1, end, nums);
        tree[node] = isMinTree ? std::min(tree[2 * node + 1], tree[2 * node + 2]) 
                               : std::max(tree[2 * node + 1], tree[2 * node + 2]);
    }

    int query(int start, int end, int node, int l, int r) {
        if (r < start || l > end) return isMinTree ? INT_MAX : INT_MIN;
        if (l >= start && r <= end) return tree[node];
        
        int mid = l + (r - l) / 2;
        int leftVal = query(start, end, 2 * node + 1, l, mid);
        int rightVal = query(start, end, 2 * node + 2, mid + 1, r);
        
        return isMinTree ? std::min(leftVal, rightVal) : std::max(leftVal, rightVal);
    }

    int query(int l, int r) {
        return query(l, r, 0, 0, n - 1);
    }
};

class Solution {
public:
    long long maxTotalValue(std::vector<int>& nums, int k) {
        int n = nums.size();
        SegmentTree minST(nums, true);
        SegmentTree maxST(nums, false);

        // Max-priority queue to store {value, left_index, right_index}
        std::priority_queue<std::tuple<long long, int, int>> pq;

        for (int l = 0; l < n; l++) {
            long long val = (long long)maxST.query(l, n - 1) - minST.query(l, n - 1);
            pq.push({val, l, n - 1});
        }

        long long result = 0;
        while (k-- > 0 && !pq.empty()) {
            auto [val, l, r] = pq.top();
            pq.pop();
            result += val;

            if (r > l) {
                // After picking (l, r), check (l, r-1)
                long long nextVal = (long long)maxST.query(l, r - 1) - minST.query(l, r - 1);
                pq.push({nextVal, l, r - 1});
            }
        }
        return result;
    }
};