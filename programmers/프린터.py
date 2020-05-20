def solution(priorities, idx):
    from collections import deque
    d = deque(priorities)
    cnt = 0
    while d:
        mx = max(d)
        left = d.popleft()
        idx -= 1
        if mx > left:
            d.append(left)
            if idx < 0:
                idx = len(d)-1
        elif idx < 0:
            if mx == left:
                cnt += 1
                return cnt
        else:
            cnt += 1


solution([1, 1, 9, 1, 1, 1], 0)
