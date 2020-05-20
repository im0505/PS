import sys

n = int(input())
a = sorted([int(sys.stdin.readline()) for _ in range(n)])

m = 0

for i in range(0, n):
    w = (n-i)*a[i]
    m = max(w, m)
print(m)
