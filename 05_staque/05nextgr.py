class Solution(object):
    def nextGreaterElementwrong(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        stack = []
        ans = []

        while nums1 is not None:
            while nums2 is not None:
                print("hello")

    def nextGreaterElementbrute(self, nums1, nums2):
        ans = []
        for x in nums1:
            j = nums2.index(x)
            res = -1
            for k in range(j + 1, len(nums2)):
                if nums2[k] > x:
                    res = nums2[k]
                    break
            ans.append(res)
        return ans

    def nextGreaterElement(self, nums1, nums2):
        stack = []
        nge = {} 

        for x in nums2:
            while stack and stack[-1] < x:
                nge[stack.pop()] = x
            stack.append(x)

        return [nge.get(x, -1) for x in nums1]
    




'''
A1: 
    - Initialize a stack. put nums1 in that stack.
    - for every pop check if that specific element in nums2 has greater element than element itself. Basically pop nums2 until you get the numbers match from the nums1 and if you do then check if the previous pop element was greater than the current or not.
    - if yes then append to a new array ans if yes then write that greater element and if not then write -1.
'''


'''
496. Next Greater Element I
Easy
Topics
premium lock icon
Companies
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
 

Constraints:

1 <= nums1.length <= nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 104
All integers in nums1 and nums2 are unique.
All the integers of nums1 also appear in nums2.
 

Follow up: Could you find an O(nums1.length + nums2.length) solution?
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
1,668,011/2.2M
Acceptance Rate
77.0%
Topics
Mid Level
Array
Hash Table
Stack
Monotonic Stack
icon
Companies
Similar Questions
Next Greater Element II
Medium
Next Greater Element III
Medium
Daily Temperatures
Medium
Sum of Subarray Ranges
Medium
Sum of Total Strength of Wizards
Hard
Next Greater Element IV
Hard
Remove Nodes From Linked List
Medium
Smallest Missing Integer Greater Than Sequential Prefix Sum
Easy
'''