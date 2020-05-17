import sys
# sys.stdin = open('input.txt', 'rt')

input()
a = list(map(int, input().split()))
input()
b = list(map(int, input().split()))
for i in range(len(b)):
    a.append(b[i])
a.sort()
for i in a:
    print(i, end=' ')
