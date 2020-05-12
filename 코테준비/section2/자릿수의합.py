import sys
# sys.stdin = open('input.txt', 'rt')
n = int(input())
m = 0
ans = None
list = list(map(str, input().split()))


def digit_sum(x):
    sum = 0
    for i in range(len(x)):
        sum += int(x[i])
    return sum


max = 0
for v in list:
    if digit_sum(v) > m:
        m = digit_sum(v)
        ans = v
print(ans)
