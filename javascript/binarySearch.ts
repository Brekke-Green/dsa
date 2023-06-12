export function binarySearch(array: number[], target: number): number {
  let start = 0
  let end = array.length
  do {
    let mid = Math.floor(start + (end - start) / 2)
    if (array[mid] === target) {
      return mid
    } else if (array[mid] < target) {
      start = mid + 1
    } else {
      end = mid
    }
  } while (start < end)
  return -1;
}
