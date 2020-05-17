import sys
sys.stdin = open('input.txt', 'rt')
n, m = map(int, input().split())
a = list(map(int, input().split()))
a.sort()
print(a)
s = 0
e = n-1
p = n//2
while True:
    if a[p] == m:
        print(p+1)
        break
    elif a[p] > m:
        e = p-1
        p = (s+e)//2
    else:
        s = p + 1
        p = (s+e)//2
