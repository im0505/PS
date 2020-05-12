import sys
# sys.stdin = open('input.txt', 'rt')
n = int(input())
arr = list(map(int, input().split()))
avg = int(sum(arr)/len(arr)+0.5)
min = abs(avg-arr[0])
idx = 1
val = arr[0]
for i, v in enumerate(arr):
    tmp = abs(avg-v)
    if tmp < min:
        min = abs(avg-v)
        idx = i+1
        if v > val:
            val = v
    if tmp == min:
        if v > val:
            val = v
            idx = i+1
print(avg, idx)
