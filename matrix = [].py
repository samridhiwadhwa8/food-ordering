# matrix=[[1,2,3],
#         [4,5,6],
#         [7,8,9]]
# transpose=[[matrix[j][i] for j in range(3)]for i in range(3)]
# for row in transpose:
#     print(row)

# matrix=[[1,2,3],
#         [6,4,5],
#         [9,7,8]]
# tsum=0
# for row in matrix:
# #     tsum=tsum+sum(row)

# # print(tsum)
# matrix=[
#     [1,2,3],
#     [4,5,6],
#     [7,8,9]
#         ]
# # total_sum=0
# # for row in matrix:
# #     total_sum+=sum(row)
# # print(total_sum)
# transpose=[[matrix[j][i] for j in range(3)]for i in range(3)]
# for row in transpose:
#     print(row)
# from functools import reduce
# numbers = [1, 2, 3, 4]
# result = reduce(lambda x, y: x + y if y % 2 == 0 else x, numbers)
# print(result)
# str="HELLO"
# print(str)
# str="hello"
# print(str)
# import random

# random_number = random.randint(1, 100)
# # print(random_number)
# import random
# random.seed(42)  # Set the seed to 42
# random_number = random.randint(1, 100)
# # print(random_number)
# fruits = ("apple","banana", "cherry")
# #  mytuple = fruits * 2
# # # print(mytuple)
# # fruits = ("apple", "banana", "cherry")
# print(fruits.count("apple"))
# A basic code for matrix input from user
def fib(n):
    if n==0:
        return 0
    if n==1:
        return 1
    else:
        return(fib(n-1)+fib(n-2))
num=int(input())
for i in range(num):
    print(fib(num))