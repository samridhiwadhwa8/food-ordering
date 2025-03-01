# def fibonacci(n):
#     # Base case: return 0 or 1 for the first two Fibonacci numbers
#     if n <= 1:
#         return n
#     # Recursive case: sum of the previous two Fibonacci numbers
#     else:
#         return fibonacci(n - 1) + fibonacci(n - 2)

# # Taking input from the user
# n = int(input("Enter the number of terms in Fibonacci sequence: "))

# # Printing Fibonacci sequence up to the nth term
# print("Fibonacci sequence:")
# for i in range(n):
#     print(fibonacci(i))
# import keyword
# print(keyword.kwlist)
# my_list = [(1, 'apple'), (2, 'orange'), (3, 'banana')]
# sorted_list = sorted(my_list, key=lambda x: x[1])
# print(sorted_list)
# thislist = ["apple","banana","cherry"]
# tropical = ["mango","pineapple","papaya"]
# thislist.extend(tropical)#list within list hota hai [1,2,3,4]not[1,2[3,4]]
# print(thislist)
# thislist = ["apple","banana","cherry"]
# tuple_k= ("mango","pineapple","papaya")
# thislist.extend(tropical)#tuple within list hota hai [1,2,3,4]not[1,2(3,4)]
# print(thislist)
# list1 = ["a","b","c"]
# list2 = [1,2,3]
# for x in list2:
#  list1.append(x)
# print(list1) #same as extend list within list same syntax output
def sum_(n):
    if n==0:
        return 0
    return sum_(n-1) + n

print(sum_(5))
