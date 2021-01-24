from collections import deque
order = input()
n = int(input())
names = []
for i in range(n):
    names.append(input())
####
# order = "AKDEF"
# n = 1
# names = ["WOPASFKGHDEF"]

table = {}
for c in order:
    table[c] = True

for _ in range(n):
    d = deque(list(order))
    for c in names[_]:
        if c in table and c != d[0]:
            print("#", end='')
            print(_+1, end=' ')
            print("NO")
            break
        if c in table and c == d[0]:
            d.popleft()
        if len(d) == 0:
            print("#", end='')
            print(_+1, end=' ')
            print("YES")
            break
    else:
        print("#", end='')
        print(_+1, end=' ')
        print("NO")
