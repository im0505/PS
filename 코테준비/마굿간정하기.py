import sys
# sys.stdin = open('input.txt', 'rt')
n, c = map(int, input().split())
list = []
for _ in range(n):
    list.append(int(input()))
list.sort()

l = list[0]
r = list[n-1]


def Count(len):
    cnt = 1
    now = list[0]
    for i in range(1, n):
        if list[i]-now >= len:
            cnt += 1
            now = list[i]

    return cnt


res = 0
while l <= r:
    mid = (l+r)//2
    if Count(mid) >= c:
        res = mid
        l = mid + 1
    else:
        r = mid - 1
print(res)
