num = int(input("Enter a value:"))

mul=1

if num<=0:
    print("The inputed invalied number.")
for i in range(1,num+1):
    mul = mul*i
    
print("The total value:", +mul)