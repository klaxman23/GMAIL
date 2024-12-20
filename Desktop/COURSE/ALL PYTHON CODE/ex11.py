arr = [1,2,3,[4,5,[6]]]
result = []

def rnf(item):
    for i in item:
        if type(i) is list:
            rnf(i)
        else:
            result.append(i)
rnf(arr)

print("arr= ",result)


