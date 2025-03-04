class Solution:
    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        result = 0
        if len(grid) < 3 or len(grid[0]) < 3:
            return result

        x_stop: int = len(grid[0]) - 2
        y_stop: int = len(grid) - 2

        for y in range(y_stop):
            for x in range(x_stop):
                if check_square(grid, x, y):
                    result+=1

        return result

def check_square(grid: List[List[int]], x_i: int, y_i: int) -> bool:
    box = []
    for i in range(y_i, y_i + 3):
        box.append(grid[i][x_i:x_i+3])

    included = [item for row in box for item in row]
    included.sort()
    if included != [1,2,3,4,5,6,7,8,9]:
        return False
    else:
        sum_check = sum(grid[y_i][x_i:x_i+3])
        return check_sums(grid, x_i, y_i, sum_check)

def check_sums(grid: List[List[int]], x_i: int, y_i: int, target: int) -> bool:
    same_sum = True
    check_list = [
        grid[y_i][x_i:x_i+3],
        grid[y_i+1][x_i:x_i+3],
        grid[y_i+2][x_i:x_i+3],
        [grid[y_i][x_i], grid[y_i+1][x_i], grid[y_i+2][x_i]],
        [grid[y_i][x_i+1], grid[y_i+1][x_i+1], grid[y_i+2][x_i+1]],
        [grid[y_i][x_i+2], grid[y_i+1][x_i+2], grid[y_i+2][x_i+2]],
        [grid[y_i][x_i], grid[y_i+1][x_i+1], grid[y_i+2][x_i+2]],
        [grid[y_i+2][x_i], grid[y_i+1][x_i+1], grid[y_i][x_i+2]]
        ]
    for l in check_list:
        if sum(l) != target:
            same_sum = False
    
    return same_sum

