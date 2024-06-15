var searchMatrix = function(matrix, target) {
    let rows = matrix.length, cols = matrix[0].length;
    let low = 0, high = rows - 1;
    
    // Binary search to find the correct row
    while (low <= high) {
        let mid = (low + high) >>> 1;
        if (target > matrix[mid][cols - 1]) {
            low = mid + 1;
        } else if (target < matrix[mid][0]) {
            high = mid - 1;
        } else {
            low = mid;
            break;
        }
    }
    
    if (!(low <= high)) { 
        return false;
    }
    
    // The correct row is found, now perform binary search in that row
    let row = low;
    console.log(matrix[row])
    console.log(matrix[row])
    let left = 0, right = cols - 1;
    
    while (left <= right) {
        let mid = (left + right) >>> 1;
        if (target > matrix[row][mid]) {
            left = mid + 1;
        } else if (target < matrix[row][mid]) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    
    return false;
};

// Test the function with the given example
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
let target = 3;
console.log(searchMatrix(matrix, target)); // Output should be true
