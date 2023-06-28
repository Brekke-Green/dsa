class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        result1 = []
        result2 = []
        stack1 = [root1]
        stack2 = [root2]
        while len(stack1) > 0:
            current = stack1.pop()
            if current.left == None and current.right == None:
                result1.append(current.val)
            if current.left:
                stack1.append(current.left)
            if current.right:
                stack1.append(current.right)
        while len(stack2) > 0:
            current = stack2.pop()
            if current.left == None and current.right == None:
                result2.append(current.val)
            if current.left:
                stack2.append(current.left)
            if current.right:
                stack2.append(current.right)
        print(result1)
        print(result2)
        return result1 == result2
