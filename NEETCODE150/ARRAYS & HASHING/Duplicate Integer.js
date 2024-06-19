let nums = [1, 2, 4, 4];


class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    let hash={};
    for(let x of nums){
        hash[x]=(hash[x]||0)+1
    }
    console.log(hash)
    for(let key in hash){
       if(hash[key]>1)return true;
    }
    return false;
}}
let solution = new Solution();
console.log(solution.hasDuplicate(nums)); 