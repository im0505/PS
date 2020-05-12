import sys
# sys.stdin = open('input.txt')
n = int(input())
for i in range(n):
    string = input()
    half = len(string)//2
    idx = len(string)-1
    for j in range(half):
        char = string[j].lower()
        char2 = string[j].upper()
        if string[idx-j] != char and string[idx-j] != char2:
            print('#', end='')
            print(i+1, 'NO')
            break
    else:
        print('#', end='')
        print(i+1, 'YES')
