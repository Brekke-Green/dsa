// Brekke Green - twoSum solution Leetcode
// date: 03/05/2021
// runtime: 80ms (faster than 55.96%)
// memory: 38.6 MB (less than 71.96%)

var twoSum = function(nums, target) {    
    // loop through first part of the sum
    for (let i = 0; i < nums.length-1; i++) {
        // loop through for secoond part of sum
        for (let j = i+1; j < nums.length; j++) {
            // test against target value and return indices in an array if the conditional is true
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }   
    }
};

// Brekke Green - twoSum solution Leetcode
// date: 17/07/2023
// runtime: 59ms (faster than 67.88%)
// memory: 42.26 MB (less than 71.73%)

var twoSum = function(nums, target) {
    for (let i = nums.length; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
           if (nums[i] + nums[j] === target) {
               return [j, i]
           }
       }
   } 
};
