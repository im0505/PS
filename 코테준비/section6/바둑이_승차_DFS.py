def DFS(v, s, ts):
    global m
    if s > c:
        return
    if s + (total - ts) <= m:
        return

    if s <= c and m <= s:
        m = s
        if m == c:
            print(m)
            import sys
            sys.exit(0)

    if v > n-1:
        return
    DFS(v+1, s+a[v], ts+a[v])
    DFS(v+1, s, ts+a[v])


if __name__ == '__main__':
    c, n = map(int, input().split())
    m = 0

    a = []
    for i in range(n):
        a.append(int(input()))
    total = sum(a)

    DFS(0, 0, 0)
    print(m)
