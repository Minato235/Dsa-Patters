//Maximum and minimum of an array using minimum number of comparisons
function subarray(array,n){
   let temp=0,max=0,min=0;
   // for(let i=0;i<n;i++){
   //    max+=array[i];
   //    min+=array[i];
   // }
   max+=array[0];
      min+=array[0]
   temp=max;
   for(let j=n;j<array.length;j++){
      temp=temp-array[j-n]+array[j];
      max=Math.max(temp,max)
      min=Math.min(temp,max)
   }
   return [max,min]
   
}
// console.log(subarray([1,2,5,2],1))
let arr=[1,2,3,4],arr1=[]
let start=0,end=arr[arr.length-1];
while(end>start){
   let temp=arr[start]
   arr[start]=arr[end]
   arr[end]=temp;
   start++;
   end--;
}
// console.log(arr.slice(1,arr.length))
var containsDuplicate1= function(nums) {
let obj={};
for(const x of nums){
   obj[x]=(obj[x]||0)+1;
}
var index = Object.values(obj);
// console.log(index)
for(let i=0;i<index.length;i++){
   let key=index[i];
   if(key==2){
      return true;
   }else{
      return false
   }
}
   };
   var containsDuplicate=function(nums){
      let key=[... new Set(nums)];
if(key.length!=nums.length){
   return true
}else{
   return false;
}
   }
   console.log(containsDuplicate([2,14,18,22,22]))