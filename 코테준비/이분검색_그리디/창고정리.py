# import sys
# sys.stdin = open('input.txt', 'rt')
n = int(input())-1
list = list(map(int, input().split()))
m = int(input())
for _ in range(m):
    list.sort(reverse=True)
    list[0] -= 1
    list[n] += 1
list.sort(reverse=True)
print(list[0]-list[n])
