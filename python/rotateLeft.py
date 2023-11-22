def rotateLeft(d, arr):
    for i in range(d):
        num = arr.pop(0)
        arr.append(num)
    return arr
