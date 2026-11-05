MOD = 10**9 + 7

def sum_subarray_mins(arr):
    nse  = find_nse(arr)
    psee = find_psee(arr)

    total = 0
    for i, val in enumerate(arr):
        left  = i - psee[i]          
        right = nse[i] - i         
        total = (total + val * left * right) % MOD

    return total

def find_nse(arr):
    n = len(arr)
    nse = [n] * n
    st = []                              

    for i in range(n - 1, -1, -1):            
        while st and arr[st[-1]] >= arr[i]: 
            st.pop()
        nse[i] = st[-1] if st else n
        st.append(i)

    return nse


def find_psee(arr):
    n = len(arr)
    psee = [-1] * n
    st = []

    for i in range(n):                       
        while st and arr[st[-1]] > arr[i]:  
            st.pop()
        psee[i] = st[-1] if st else -1
        st.append(i)

    return psee

print(sum_subarray_mins([3, 1, 2, 4]))  

