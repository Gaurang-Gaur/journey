a=[[1,2,2],
[3,4,5],
[8,9,10]]
b=[[35,13,53],
[31,32,33],
[35,36,37],
[45,44,49]] # length of b is 4


# for 3X4 matrix multiplication

result=[[0,0,0],
[0,0,0],
[0,0,0],
[0,0,0]]

print(len(a))
print(len(b))
print(len(b[0]))
for i in range(len(a)):
    for j in range(len(b[0])):
        for k in range(len (a)):

            result+=a[i][k]*b[k][j]


for i in range(len(a)):
    for j in range(len(b)):
        
        print(a[i][j])
