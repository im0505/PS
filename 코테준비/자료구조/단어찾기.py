import sys
# sys.stdin = open('input.txt', 'rt')
n = int(input())
table = {}
for i in range(n):
    s = input()
    table[s] = 0
for i in range(n-1):
    s = input()
    if s in table:
        table[s] = 1
for k in table:
    if table[k] == 0:
        print(k)
        break
