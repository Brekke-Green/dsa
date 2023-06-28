class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root == None:
            return 0
        result = 0
        counter = 1
        stack = [[root, counter]]
        while len(stack) > 0:
            current = stack.pop()
            if result < current[1]:
                result = current[1]
            if current[0].left:
                stack.append([current[0].left, current[1]+1])
            if current[0].right:
                stack.append([current[0].right, current[1]+1])
        return result
