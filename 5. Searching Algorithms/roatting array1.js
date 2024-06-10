/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0;r=nums.length-1;
    while(l<=r){
        let mid=l+Math.floor((r-l)/2);
        if(nums[mid]===target) return mid;
        if(nums[mid]>=nums[l]){
            if(nums[mid]>target && nums[l]<=target){
            r=mid-1;
        }else{
            l=mid+1;
            
        }
        }else if(nums[mid]<target && nums[r]>=target){
            l=mid+1
        }else{
            r=mid-1;
        }
    }
    return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2], target = 0;
console.log(search(nums, target)); // Output should be 4
