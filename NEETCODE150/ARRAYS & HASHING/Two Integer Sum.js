
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const comp=target-num;
            console.log(map)
            if(map.has(comp)){
                return [map.get(comp),i]
            }
             map.set(num,i)
        }
        return[-1,-1]
    }
}


let solution = new Solution();

let nums = [3, 4, 5, 6], target = 7;


console.log(solution.twoSum(nums, target));