import sys
# sys.stdin = open('input.txt', 'rt')

n, m = map(int, input().split())
a = list(map(int, input().split()))
l = 0
r = 1
sum = a[l]
cnt = 0
while True:
    if sum == m:
        cnt += 1
        sum -= a[l]
        l += 1
    elif sum < m:
        if r >= n:
            break
        sum += a[r]
        r += 1

    elif sum > m:
        sum -= a[l]
        l += 1
print(cnt)
