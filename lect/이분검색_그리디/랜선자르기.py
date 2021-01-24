import sys
sys.stdin = open('input.txt', 'rt')
k, n = map(int, input().split())
res = 0
lan = []
for i in range(k):
    lan.append(int(input()))
s = 1
e = max(lan)
mid = (s+e)//2
res = 0
while True:
    cnt = 0
    for i in range(k):
        cnt += lan[i]//mid
    if cnt < n:
        e = mid-1
    else:
        res = mid
        s = mid+1
        if s > e:
            break
    mid = (s + e) // 2
print(res)
