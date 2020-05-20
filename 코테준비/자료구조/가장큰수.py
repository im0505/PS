def sol(n, m):
    s = str(n)
    for i in range(m):
        ar = list(s)
        m = 0
        for j in range(len(ar)):
            now = list(ar)
            now.pop(j)
            now = int(''.join(now))
            m = max(m, now)
        s = str(m)
    return s


n, m = map(int, input().split())
print(sol(n, m))
