# N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로
# 나누었을 때 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면
# YES를 출력하고 그렇지 않으면 NO를 출력하는 프로그램을 작성하세요
# 예를 들어 {1,3,5,6,7,10}이 입력되변 {1,3,5,7} = {6,10}으로
# 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다.


def DFS(i, s):

    if i > n-1:
        return
    else:
        if s+list[i] == total/2:
            print("yes")
            import sys
            sys.exit(0)
        DFS(i+1, s+list[i])
        DFS(i+1, s)


if __name__ == "__main__":
    # n = int(input())
    n = 6
    # list = list(map(int,input().split()))
    list = [1, 3, 5, 6, 7, 10]
    # list = [1, 2, 5, 6, 7, 10]
    total = sum(list)
    DFS(0, 0)
    print('no')
