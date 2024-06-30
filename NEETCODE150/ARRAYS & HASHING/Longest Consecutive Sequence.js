class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let long = 0; let set = new Set(nums);
        for (let x of set) {
            if (!set.has(x - 1)) {
                let length = 1;
                while (set.has(x + 1)) {
                    length++;
                }
                long = Math.max(length, long);
            }
        }
        return long;
    }
}

let nums = [2, 20, 4, 10, 3, 4, 5];
let solution = new Solution();
console.log(solution.longestConsecutive(nums))