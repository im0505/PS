from collections import deque


def sol(n, m):
    d = deque(n)
    mx = max(d)
    idx = m
    cnt = 0
    while True:
        now = d.popleft()
        if now < mx:
            d.append(now)
            idx -= 1
        elif now == mx:
            #not append

            cnt += 1
            idx -= 1
            if idx < 0:
                return cnt
            mx = max(d)
        if idx < 0:
            idx = len(d)-1


n, m = map(int, input().split())
l = list(map(int, input().split()))
print(sol(l, m))
