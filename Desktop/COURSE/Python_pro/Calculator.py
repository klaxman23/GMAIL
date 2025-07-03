a = int(input("Enter a value: "))
b = int(input("Enter a value: "))

c = input("Enter a operator :")

if c =="+":
    print("Result",a+b)
elif c =="-":
    print("Result",a-b)
elif c =="*":
    print("Result",a*b)
elif c =="/":
    print("Result",a/b)
else:
    print("Invalid operator!!!")