import sys
import heapq as hq
# sys.stdin = open('input.txt', 'rt')

a = []
while True:
    now = int(input())
    if now == -1:
        break
    if now == 0:
        print(hq.heappop(a))
    else:
        hq.heappush(a, now)
