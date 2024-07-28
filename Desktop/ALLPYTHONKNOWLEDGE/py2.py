num = int(input("Enter a value:"))

num1 = int(input("Enter a value:"))

opr = input("Enter a operator:")

if opr =="+":
    print(f"The addtion on {num} + {num1}  = {num+num1}")
    
if opr =="-":
    print(f"The sub on {num} - {num1}  = {num-num1}")
    
if opr =="*":
    print(f"The mul on {num} * {num1}  = {num*num1}")
    
if opr =="/":
    print(f"The div on {num} / {num1}  = {num/num1}")
    
else:
    print("invalid operator")