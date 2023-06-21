function maxArea(height: number[]): number {
    let area: number = 0
    let left: number = 0
    let right: number = height.length - 1

    while (left < right) {
        let shortest: number = height[left] < height[right] ? height[left] : height[right];
        let newArea: number = shortest * (right - left);
        area = area > newArea ? area : newArea;

        height[left] < height[right] ? left++ : right--;
    }
    return area
};
