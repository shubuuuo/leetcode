class Solution(object):
    def subArrayRanges(self, nums):
        n = len(nums)

        def find_nse(arr):
            nse, st = [n] * n, []
            for i in range(n - 1, -1, -1):
                while st and arr[st[-1]] >= arr[i]:
                    st.pop()
                nse[i] = st[-1] if st else n
                st.append(i)
            return nse

        def find_psee(arr):
            psee, st = [-1] * n, []
            for i in range(n):
                while st and arr[st[-1]] > arr[i]:
                    st.pop()
                psee[i] = st[-1] if st else -1
                st.append(i)
            return psee

        def find_nge(arr):
            nge, st = [n] * n, []
            for i in range(n - 1, -1, -1):
                while st and arr[st[-1]] <= arr[i]:
                    st.pop()
                nge[i] = st[-1] if st else n
                st.append(i)
            return nge

        def find_pgee(arr):
            pgee, st = [-1] * n, []
            for i in range(n):
                while st and arr[st[-1]] < arr[i]:
                    st.pop()
                pgee[i] = st[-1] if st else -1
                st.append(i)
            return pgee

        nse, psee = find_nse(nums), find_psee(nums)
        nge, pgee = find_nge(nums), find_pgee(nums)

        total = 0
        for i, v in enumerate(nums):
            total += v * (i - pgee[i]) * (nge[i] - i)
            total -= v * (i - psee[i]) * (nse[i] - i)

        return total