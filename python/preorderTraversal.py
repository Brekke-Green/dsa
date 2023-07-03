class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        stack = [root]
        while stack:
            current = stack.pop()
            if current == None:
                break
            result.append(current.val)
            if current.right != None:
                stack.append(current.right)
            if current.left != None:
                stack.append(current.left)
        return result
