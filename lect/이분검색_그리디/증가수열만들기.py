import sys
from collections import deque

# sys.stdin = open('input.txt', 'rt')
n = int(input())
d = list(map(int, input().split()))
seq = deque([0])
d = deque(d)
now = 0
s = ""

while d:
    now = seq[-1]
    if len(d) == 1:
        l = d.pop()
        if l > seq[-1]:
            s += "L"
            seq.append(l)
        break
    l = d.popleft()
    r = d.pop()
    if l > now or r > now:
        if l > now and r > now:
            if r > l:
                s += "L"
                seq.append(l)
                d.append(r)
            elif r < l:
                s += "R"
                seq.append(r)
                d.appendleft(l)
        elif l > now:
            s += "L"
            seq.append(l)
            d.append(r)
        elif r > now:

            s += "R"
            seq.append(r)
            d.appendleft(l)
    else:
        break

seq.popleft()
print(len(seq))
print(s)
