class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        counter = 0
        result = []

        def createRow(triangle: List[List[int]], length: int) -> List[int]:
            sub_array = []
            for i in range(length):
                if i == 0:
                    sub_array.append(1)
                else:
                    num = triangle[length-1][i-1] + triangle[length-1][i]
                    sub_array.append(num)
            sub_array.append(1)
            return sub_array

        while len(result) < numRows:
            if counter > 1:
                result.append(createRow(result, counter))
                counter+=1
            else:
                if numRows == 1:
                    return [[1]]
                result.append([1])
                result.append([1,1])
                counter+=2
        return result
