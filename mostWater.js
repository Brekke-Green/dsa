// Leet Code - Most water area - Medium - 92% runtime; 65% memory usage

var maxArea = function(height) {
    let area = 0;
    let left = 0;
    let right = height.length-1;
    
    while (left < right) {
        
        let shortest = ((height[left] < height[right]) ? height[left] : height[right]);
        let newArea = shortest * (right - left);
        area = ((area > newArea) ? area : newArea);
        
        (height[left] < height[right]) ? left+=1 : right-=1
    }
    return area;
};