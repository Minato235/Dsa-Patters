
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Correct midpoint calculation
        if (nums[mid] === target) {
            return mid;
        }
        // Left part is sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        // Right part is sorted
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2], target = 0;
console.log(search(nums, target)); // Output should be 4


console.log(search(nums))
