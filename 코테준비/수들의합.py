import sys
# sys.stdin = open('input.txt', 'rt')
n, m = map(int, input().split())

a = list(map(int, input().split()))

cnt = srt = now = 0
while srt < n:
    for i in range(srt, n):
        now += a[i]
        if now == m:
            now = 0
            srt += 1
            cnt += 1
            break
        elif now > m:
            now = 0
            srt += 1
            break
    else:
        now = 0
        srt += 1
print(cnt)
