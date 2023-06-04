# class f1:
#     def __init__(self,a,b,c):
#         self.v=a+b+c
#     def __str__(self):
#         return "hi"


# o1=f1(5,6,7)
# print(o1.v)
# class f1:# __v is special class variable to self.v

#     def __init__(self,v):
#         self.__v=v
#     def update(self):#NOt special function because it does not have the __update__ does not call itself automatically when the function is called

#         return self.v
        


# t=f1(3)
# t.v=5
# print(t.v)
# class f1:# __v is special class variable to self.v

#     def __init__(self,a,b):
#         self.a=a
#         self.b=b
#         print(self.a)
# ob=f1("abc",4)
# ob.a=23
# print(ob.a)        


# t=f1(3)
# t.v=5
# print(t.v)


# class f1:
#     def __init__(self,a,b,c):
#         self.v=a+b+c
#     def __repr__(self):
#         n=str(self.v)
#         return n


# o1=f1(5,6,7)
# print(o1.v)


# class f1:
#     def __init__(self):
#         self.c=5
#         self.c=c+1#we can not update the value c and on the rhs we local variable hence the error c is not define inside the constructor

# o1=f1()
# print(o1.c);
# class f1:
#     def __init__(self):
#         self.c=5
#         self.c=c+1#we can not update the value c and on the rhs we local variable hence the error c is not define inside the constructor

# o1=f1()
# print(o1.c);
# class newtest:
#     def __init__(self,a="Hello"):
#         self.a=a
#     def display(self):
#         print(self.a)
# obj=newtest("New Hello")
# obj.display()

class newtest:
    def __init__(self,a="Hello",b="Hi"):
        self.a=a
        self.b=b
    def display(self):
        print(self.a,self.b)
obj=newtest("New Hello")
obj.display()
# class newtest:
#     def __init__(self,a="My College"):
#         self.a=a
#     def display(self):
#         print(self.a)
# obj=newtest()
# obj.display()
# class f1:
#     def __init__(self,a):
#         self.a=a

# o1=f1(200)
# o1.q=10
# o1.b=2
# print(o1.q+len(o1.__dict__))
# print("\n",o1)
# class f1:
#     def __init__(self,a):
#         self.a=a

# o1=f1("aktu")
# o2=o1
# print(o2)# reference variable o2 and o1;
# print(o1)