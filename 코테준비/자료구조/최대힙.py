import heapq as heap
import sys
# sys.stdin = open('input.txt', 'rt')

h = []
while True:
    num = int(input())
    if num == -1:
        break
    if num == 0:
        print(-heap.heappop(h))
    else:
        heap.heappush(h, -num)
