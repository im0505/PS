s1 = input()
s2 = input()
# s1 = "AbaAeCe"
# s2 = "baeeACA"

a = {}
b = {}

for c in s1:
    if c not in a:
        a[c] = 1
    elif c in a:
        a[c] += 1
for c in s2:
    if c not in b:
        b[c] = 1
    elif c in b:
        b[c] += 1

for key in a:
    if a[key] != b[key]:
        print("NO")
        break
else:
    print("YES")
