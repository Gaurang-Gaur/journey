# class student:
#     def__init__(self,id,age):
#         self.id=id
#         self.age=age
#     print(id) 
#     print(age) 

# std=student(1,20)
# # print("running")

# Note : three 
# 1. under constructor 
# 2. while calling constructor
# # 3. inside constructor
class test:
    def __init__(self,a):# here we declaration a inside the local variable

        self.a=a # a is instance variable
    def display(self):
        print(self.a)# print function we are setting instance variable inside the constructor
obj=test() # obj is object of class test ( ) it is instance of class

obj.display();
        
# class test:

#     def __init__(self,a="Hello world"):# here we declaration a inside the local variable#         self.a=a # a is instance variable#     def display(self):#         print(self.a)# print function ,awe are setting instance variable inside the constructor                






# obj=test() # obj is object of class test ( ) it is instance of class

# obj.display();

# class change:
#     def __init__(self,x,y,z):
#         self.a=x+y+z

# x=change(1,2,3)
# y=getattr(x,'a')
# setattr(x,'a',y+1)
# print(x.a)
# print(hasattr(x,'a'))
# print(hasattr(x,'b'))