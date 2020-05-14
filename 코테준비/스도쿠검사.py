import sys
sys.stdin = open('input.txt', 'rt')
a = [list(map(int, input().split())) for _ in range(9)]
win = True
for i in range(9):
    s = set()
    for j in range(9):
        s.add(a[i][j])
    if len(s) != 9:
        win = False
        break

for i in range(9):
    s = set()
    for j in range(9):
        s.add(a[j][i])
    if len(s) != 9:
        win = False
        break


if win:
    print("YES")
else:
    print('NO')
