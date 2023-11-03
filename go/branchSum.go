package main

// This is the struct of the input root. Do not edit it.
type BinaryTree struct {
	Value int
	Left  *BinaryTree
	Right *BinaryTree
}

func BranchSums(root *BinaryTree) []int {
    result := []int{}
    DFS(root, 0, &result)
    return result
}

func DFS(node *BinaryTree, currentSum int, result *[]int) {
    if node == nil {
        return
    }

    currentSum += node.Value

    if node.Left == nil && node.Right == nil {
        *result = append(*result, currentSum)
        return
    }

    DFS(node.Left, currentSum, result)
    DFS(node.Right, currentSum, result)
}

