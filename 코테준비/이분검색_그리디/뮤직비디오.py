import sys
sys.stdin = open('input.txt', 'r')
n, m = map(int, input().split())
list = list(map(int, input().split()))
l = 1
r = sum(list)
mid = (r+l)//2


def Count(capacity):
    sum = 0
    cnt = 1
    for i in list:
        if sum+i > capacity:
            sum = i
            cnt += 1
        else:
            sum += i
    return cnt


res = 0
while l <= r:
    mid = (r+l)//2
    if Count(mid) <= m:
        res = mid
        r = mid - 1
    else:
        l = mid + 1
print(res)
