n, k = map(int, input().split())

a = [0]*(n+1)
cnt = 0
idx = 1
b = False
for i in range(2, n+1):
    if a[i] == 0:
        cnt += 1
    for j in range(i, n+1, i):
        if(a[j] == 1):
            continue
        a[j] = 1
        if k == idx:
            print(j)
            b = True
            break
        idx += 1
    if b == True:
        break
