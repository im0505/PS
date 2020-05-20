def solution(stock, dates, supplies, k):
    cnt = 0
    import heapq
    q = []
    idx = 0
    while stock < k:
        for i in range(idx, len(dates)):
            if stock < dates[i]:
                break
            heapq.heappush(q, -supplies[i])
            idx += 1
        stock += -heapq.heappop(q)
        cnt += 1
    return cnt


print(solution(4, [4, 10, 15], [20, 5, 10], 30))
