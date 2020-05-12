import sys
# sys.stdin = open('input.txt', 'rt')
n = int(input())
list = list(map(int, input().split()))
score = 0
seq = False
seqScore = 0
for i in list:
    if i == 1:
        seq = True
        seqScore += 1
        score += seqScore
    if i == 0:
        seq = False
        seqScore = 0
print(score)
