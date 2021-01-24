import heapq


arr = []
s = 0
for i in range(1, 9):
    n = int(input())
    arr.append((n, i))
arr.sort(reverse=True, key=lambda x: x[0])
a = []
for i in range(5):
    s += arr[i][0]
    a.append(arr[i][1])
print(s)
a.sort()
for i in a:
    print(i, end=' ')
