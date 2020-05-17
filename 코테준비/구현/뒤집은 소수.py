import sys
# sys.stdin = open('input.txt')
n = int(input())
a = list(map(str, input().split()))


def isPrime(x):
    if x == 1:
        return False
    if x == 2:
        return True
    for i in range(2, x):
        if x % i == 0:
            return False
    return True


for i in a:
    if isPrime(int(i[::-1])):
        print(int(i[::-1]), end=' ')
    # print(i)
