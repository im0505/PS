import sys
# sys.stdin = open('input.txt', 'rt')
n = int(input())
list = list(map(int, input().split()))
a = [0] * n
brk = False
for i, v in enumerate(list):
    cnt = 0
    for j in range(n):
        if v == cnt:
            for k in range(j, n):
                if a[k] == 0:
                    a[k] = i+1
                    brk = True
                    break
        else:
            if a[j] == 0:
                cnt += 1
        if brk:
            brk = False
            break
for _ in a:
    print(_, end=' ')
