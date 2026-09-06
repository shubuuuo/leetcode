def generate(n, curr, res):
    if curr.length() == n:
        res.push(curr)
        return

    generate(n, curr + "0", res)

    if curr.length() == 0 | curr[curr.length() - 1] != "1":
        generate(n, curr + "1", res)


generate(3, "", [])