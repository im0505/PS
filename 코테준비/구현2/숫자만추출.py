import sys
# sys.stdin = open('input.txt', 'rt')
input = input()
string = ""
for i in range(len(input)):
    if input[i].isnumeric():
        string += input[i]
print(int(string))
cnt = 0
for i in range(1, int(string)+1):
    if int(string) % i == 0:
        cnt += 1
print(cnt)
