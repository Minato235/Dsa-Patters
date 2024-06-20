class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topapKFrequent(nums, k) {
        let hash = {}; let final = [];
        for (let i of nums) {
            hash[i] = (hash[i] || 0) + 1;
        }
        let res = Object.entries(hash);
        res.sort((a, b) => b[1] - a[1]);
        // console.log(typeof(hash))
        res.sort((a, b) => b - a);
        for (let i = 0; i < k; i++) {
            final.push(parseInt(res[i][0]))
        }
        return final;
    }
}
let solution = new Solution();

let nums = [7, 7, 7, 2, 3, 2, 3], k = 1;

console.log(solution.topapKFrequent(nums, k));

