s=input("Enter a value:")

a = s[-1]
if a=="t":
    b=int(s[:-1])
    b=b*10
    print(b)
elif a=="h":
    b=int(s[:-1])
    b=b*100
    print(b)
    