def solution(people, limit):
    from collections import deque
    people.sort()
    d = deque(people)
    cnt = 0
    while d:
        if len(d) == 1:
            d.pop()
            cnt += 1
        else:

            if d[0]+d[-1] > limit:
                cnt += 1
                d.pop()
            else:
                cnt += 1
                d.pop()
                d.popleft()

    return cnt


print(solution([70, 50, 80, 50], 100))
