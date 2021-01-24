import sys
sys.stdin = open('input.txt')
while True:
    str = input()
    if str == ".":
        break
    stack = []
    for c in str:
        if c == "(":
            stack.append("(")
        elif c == ")":
            if len(stack) == 0:
                print('no')
                break
            if stack[-1] == "(":
                stack.pop()
            else:
                stack.append(")")
        elif c == "[":
            stack.append("[")
        elif c == "]":
            if len(stack) == 0:
                print('no')
                break
            if stack[-1] == "[":
                stack.pop()
            else:
                stack.append("]")
    else:
        if len(stack) == 0:
            print("yes")
        else:
            print("no")
