var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let res = [];

    for (let x = 0; x < nums.length - 1; x++) {
        if(x>0 && nums[x] == nums[x-1]){
            continue
        }
        let left = x + 1, right = nums.length - 1;
        while (left < right) {
            let sum =nums[left]+nums[x]+nums[right]
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                res.push([nums[left],nums[x],nums[right]])
                left++;
                right--;
                while(left<right && nums[left]==nums[left-1]){
                    l++;
                }
            }
        }
    }
    return res

};
var threeSum = function (nums) {
    let res = []; let sum;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length-2; i++) {
        if(i>0 && nums[i]===nums[i-1]){continue}
        l = i + 1, r = nums.length - 1;

        while (l < r) {
            sum = nums[i] + nums[l] + nums[r];
            console.log(sum)
            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                res.push([nums[i],nums[l],nums[r]]);
                l++;
                r--;
                while(l<r && nums[l]==nums[l-1]){
                    i++;
                }
            }
        }


    }
    return res;

};
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums))

//skip values we have to code