import sys
sys.stdin = open('input.txt')
n = int(input())
list = list(map(int, input().split()))
m = int(input())
r = max(list)
l = 0
res = 0
while l <= r:
    mid = (r+l)//2
    sum = 0
    for i in range(n):
        if mid >= list[i]:
            sum += list[i]
        else:
            sum += mid
    if sum <= m:
        l = mid + 1
        res = mid
    else:
        r = mid - 1
print(res)
