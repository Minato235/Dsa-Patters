class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res=[];
        let prefix=1;
        let postFix=1;
        for(let i=0;i<nums.length;i++){
            res[i]=prefix;
            prefix*=nums[i];
        }
        for(let i=nums.length-2;i>=0;i--){
            postFix*=nums[i+1];
            res[i]*=postFix;
        }
        return res;

    }
}


let nums = [1,2,4,6];
let solution = new Solution();
console.log(solution.productExceptSelf(nums))
