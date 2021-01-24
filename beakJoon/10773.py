import sys
sys.stdin = open('input.txt', 'rt')
n = int(input())
stack = []
for _ in range(n):
    now = int(input())
    if now == 0 and len(stack) != 0:
        stack.pop()
    if now != 0:
        stack.append(now)
print(sum(stack))
