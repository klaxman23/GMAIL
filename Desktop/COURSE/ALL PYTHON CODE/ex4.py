name = input("Enter a value:")

rev = ""

for i in name:
    rev = i + rev
print(rev)

if rev == name:
    print("it is a palindrome")
else:
    print("it is not a palindrome")