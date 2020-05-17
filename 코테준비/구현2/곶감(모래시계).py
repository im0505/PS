import sys
# sys.stdin = open('input.txt', 'rt')

n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]

m = int(input())

for i in range(m):
    r, d, c = map(int, input().split())
    r -= 1
    for j in range(c):
        if d == 0:
            a[r].append(a[r].pop(0))
        else:
            a[r].insert(0, a[r].pop())
sum = 0
s = 0
e = n
for i in range(n):
    for j in range(s, e):
        sum += a[i][j]
    if i < n//2:
        s += 1
        e -= 1
    else:
        s -= 1
        e += 1
print(sum)
