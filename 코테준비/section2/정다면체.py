import sys
# sys.stdin = open('input.txt', 'rt')
n, m = map(int, input().split())
a = []
a = [0 for i in range(n+m+1)]

for i in range(1, n+1):
    for j in range(1, m+1):
        a[i+j] += 1
m = max(a)
list = []
for i in range(len(a)):
    if m == a[i]:
        list.append(i)
for i in range(len(list)):
    print(list[i], end=' ')
