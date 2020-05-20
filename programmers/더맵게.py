def solution(scoville, K):
    import heapq as hq
    h = []
    cnt = 0
    for e in scoville:
        hq.heappush(h, e)
    while h:
        root = hq.heappop(h)
        if root < K and len(h) >= 1:
            scnt = hq.heappop(h)
            new = root + (2*scnt)
            hq.heappush(h, new)
            cnt += 1
        elif root < K and len(h) == 0:
            return -1

    return cnt


print(
    solution([1, 2, 3, 9, 10, 12], 7)
)
