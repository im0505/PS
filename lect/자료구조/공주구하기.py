from collections import deque


def sol(n, k):

    d = deque([_ for _ in range(1, n+1)])
    now = 0
    while len(d) != 1:
        if now == k-1:
            d.popleft()
            now = 0
        else:
            d.append(d.popleft())
            now += 1
    return d.pop()


n, k = map(int, input().split())
print(sol(n, k))
