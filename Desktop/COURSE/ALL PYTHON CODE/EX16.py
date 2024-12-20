def add_sub(x,y):
    c = x+y
    d = x-y
    e = x*y
    f = x/y
    return c,d,e,f

result,result1,result2,result3 = add_sub(6,6)

print("Addition:\t",result)
print("Subtraction:\t",result1)
print("Multiplication:\t",result2)
print("Divition:\t",result3)