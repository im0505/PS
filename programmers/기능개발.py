def solution(progresses, speeds):
    import math
    answer = []
    left = []
    for i in range(len(progresses)):
        day = math.ceil((100 - progresses[i])/speeds[i])

        left.append(day)
    cnt = 1
    mx = left[0]
    for i in range(1, len(left)):
        if left[i] <= mx:
            cnt += 1
        else:
            answer.append(cnt)
            mx = left[i]
            cnt = 1
    answer.append(cnt)
    return answer


print(
    solution([93, 30, 55], [1, 30, 5])
)
