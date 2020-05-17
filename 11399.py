import sys
sys.stdin = open('input.txt')
n = int(input())
a = list(map(int, input().split()))
a.sort()

s = 0
ac = 0
for _ in a:
    ac = ac+_
    s = s+ac
print(s)
