package main

func IsValidSubsequence(array []int, sequence []int) bool {
    if len(sequence) > len(array) {
        return false
    }
    array_pointer := 0
    sequence_pointer := 0
    for array_pointer < len(array) {
        if sequence_pointer == len(sequence) {
            return true
        } else {
            if sequence[sequence_pointer] == array[array_pointer] {
                sequence_pointer++
                array_pointer++
            } else {
                array_pointer++
            }
        }
    }
    
	return sequence_pointer == len(sequence)
}

