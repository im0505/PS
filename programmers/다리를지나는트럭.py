def solution(bridge_length, weight, truck_weights):
    from collections import deque
    nowWeight = 0
    onBridge = deque([])
    times = deque([])
    truck_weights = deque(truck_weights)
    sec = 0
    while True:
        if times:
            if sec - times[0] == bridge_length:
                times.popleft()
                nowWeight -= onBridge.popleft()
        if truck_weights:
            if nowWeight + truck_weights[0] <= weight:
                nowWeight += truck_weights[0]
                onBridge.append(truck_weights.popleft())
                times.append(sec)

        sec += 1
        if len(onBridge) == 0 and len(truck_weights) == 0:
            break
    return sec


print(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))
