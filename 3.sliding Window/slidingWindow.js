function subarray(array,num){
let maxArray=0,tempArray=0,minArray=0;
for(let i=0;i<num;i++){
    maxArray+=array[i]
    minArray+=array[i]

}
tempArray=maxArray;
tempArray=minArray;

for(let j=num;j<array.length;j++){
    //remove first add n value
    tempArray=tempArray-array[j-num]+array[j];
    maxArray=Math.max(tempArray,maxArray);
    minArray=Math.min(tempArray,minArray);

}
return [maxArray,minArray];
// console.log(maxArray)
}
console.log(subarray([1,2,5,2],1))

//impotant
var maxSubArray = function(nums) {
    let sum=nums[0];
    for(let i=1;i<nums.length;i++){
    nums[i]=Math.max(nums[i],nums[i]+nums[i-1]);
    sum=Math.max(nums[i],sum)
    }
    return sum;
    };
    console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))