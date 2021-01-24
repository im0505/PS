import sys
from collections import deque
# sys.stdin = open('input.txt', 'rt')
n, m = map(int, input().split())
list = list(map(int, input().split()))
list.sort()
list = deque(list)
cnt = 0

while list:  # 비면 false 차있으면 true
    if len(list) == 1:
        cnt += 1
        break
    if list[0] + list[-1] > m:
        cnt += 1
        list.pop()
    else:
        cnt += 1
        list.popleft()
        list.pop()

print(cnt)
