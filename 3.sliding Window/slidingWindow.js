function subarray(array,num){
let maxArray=0,tempArray=0;
for(let i=0;i<num;i++){
    maxArray+=array[i]
}
tempArray=maxArray;
for(let j=num;j<array.length;j++){
    tempArray=tempArray-array[j-num]+array[j];
    maxArray=Math.max(tempArray,maxArray);
}
return maxArray;
// console.log(maxArray)
}
console.log(subarray([1,2,5,2],1))