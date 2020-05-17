import sys
# sys.stdin = open('input.txt', 'rt')
d = [i for i in range(0, 21)]
# d = list(range(1,21))
for _ in range(10):
    a, b = map(int, input().split())
    for i in range((b-a+1)//2):
        d[a+i], d[b-i] = d[b-i], d[a+i]
for _ in range(1, 21):
    print(d[_], end=' ')
