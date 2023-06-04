l1=[]


a=int(input("enter the size of list:"))

for i in range(0,a):
    b=int(input("enter the no. of list:"))
    l1.append(b)
  
print(l1)

c=int(input("enter the element you want to search:"))
for i in range(0,a):
    if(c==l1[i]):
        d=1
d=0  
if(d==1):
    print("Found")
    print("Element found: and at index: ",l1[i],i)
else:
    print("NOt found")


