import sys
# sys.stdin = open('input.txt', 'rt')
n = int(input())
m = 0
for i in range(n):
    a, b, c = map(int, input().split())
    win = 0
    if a == b == c:
        win = 10000+(a*1000)
        m = max(win, m)
    elif a == b or a == c:
        win = 1000+(a*100)
        m = max(win, m)
    elif b == c:
        win = 1000+(b*100)
        m = max(win, m)
    elif a != b and b != c:
        tmp = max(a, b, c)
        win = 100*tmp
        m = max(win, m)


print(m)
