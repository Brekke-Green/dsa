function mergeAlternately(word1: string, word2: string): string {
    const arr1 = word1.split('')
    const arr2 = word2.split('')
    const result = []
    do {
        result.push(arr1.shift())
        result.push(arr2.shift())
    } while (arr1.length > 0 && arr2.length > 0)

    result.push(arr1.join(''))
    result.push(arr2.join(''))
    return result.join('');
};
