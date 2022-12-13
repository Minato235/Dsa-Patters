function subarray(array,num){
let maxArray=0,tempArray=0;
for(let i=0;i<num;i++){
    maxArray+=array[i]
}
tempArray=maxArray;
for(let i=num;i<array.length;i++){
    tempArray=tempArray-array[i-num]+array[i];
    maxArray=Math.max(tempArray,maxArray);
}
return maxArray;
// console.log(maxArray)
}
console.log(subarray([1,2,5,2],1))