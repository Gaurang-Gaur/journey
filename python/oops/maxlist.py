l1=[]

a=int(input("enter the no. of element "))
for i in range(0,a):
    b=int(input("enter the element you wanted to add in the list"))
    l1.append(b)
    max=l1[0]
    if(max<l1[i]):
        max=l1[i]




# print(l1);

print("Max element:",max)
print("Max element:",max(l1))