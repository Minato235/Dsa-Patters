var findMin = function(nums) {
    let left=0,right=nums.length-1;
    while(left<right){
        let mid=left+right>>>1;
        if(nums[mid]>nums[right]){
            left=mid+1;
        }else{
            right=mid;
        }
    }
    return nums[left]
}; 
let nums = [3,1,2];

console.log(findMin(nums))
