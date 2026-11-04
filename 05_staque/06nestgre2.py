def next_greater_circular(arr):
    n = len(arr)
    ng = [-1] * n
    stack = []                                

    for i in range(2 * n - 1, -1, -1):           
        cur = arr[i % n]                       

        while stack and stack[-1] <= cur:
            stack.pop()

        if i < n:
            if stack:
                ng[i] = stack[-1]

        stack.append(cur)

    return ng


print(next_greater_circular([2, 10, 12, 1, 11]))  