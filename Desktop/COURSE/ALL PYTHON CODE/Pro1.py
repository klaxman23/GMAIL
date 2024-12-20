string1 = input("Enter a string value:")
count1 = 0
count2 = 0

for i in string1:
    if (i.islower()):
        count1 = count1+1
    elif(i.isupper()):
        count2=count2+1

print("The total count of string:", +count1)
print("The total count of string:", +count2)