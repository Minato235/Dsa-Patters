/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    let rows = matrix.length;
    let cols = matrix[0].length;

    // First binary search to find the correct row
    let left = 0, right = rows - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (matrix[mid][0] > target) {
            right = mid - 1;
        } else if (matrix[mid][cols - 1] < target) {
            left = mid + 1;
        } else {
            left = mid; // Target is within this row
            break;
        }
    }

    // If the row is not found, return false
    if (left > right) return false;

    let row = left;

    // Second binary search within the row
    let l = 0, r = cols - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (matrix[row][mid] > target) {
            r = mid - 1;
        } else if (matrix[row][mid] < target) {
            l = mid + 1;
        } else {
            return true;
        }
    }

    return false;
};
let matrix=[[1]]
let matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 1;
console.log(searchMatrix(matrix, target))
