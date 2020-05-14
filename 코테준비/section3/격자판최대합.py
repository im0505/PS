import sys
# sys.stdin = open('input.txt', 'rt')
n = int(input())
m = []
Max = 0
for i in range(n):
    m.append(list(map(int, input().split())))
    Max = max(sum(m[i]), Max)
for i in range(n):
    sum = 0
    for j in range(n):
        sum += m[j][i]
    Max = max(sum, Max)
sum = 0
for i in range(n):
    sum += m[i][i]
Max = max(Max, sum)
sum = 0
for i in range(n):
    sum += m[i][n-1-i]
Max = max(Max, sum)

print(Max)
