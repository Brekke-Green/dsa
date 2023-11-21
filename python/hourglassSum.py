def hourglassSum(arr):
    max = -math.inf
    for i in range(4):
        for j in range(4):
            result = sumGlass(arr, i, j)
            if max < result:
                max = result
                print(i, j)
    return max
    

def sumGlass(arr, x, y):
    positions = [[0, 0], [0, 1], [0, 2], [1, 1], [2, 0], [2, 1], [2, 2]]
    sum = 0
    for pos in positions:
        sum+=arr[y+pos[0]][x+pos[1]]
    return sum
    
