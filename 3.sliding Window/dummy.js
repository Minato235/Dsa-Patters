//hellothere longest unique
//[1252815] longest subarray ex:num:3
function subarray(array,num){
    if(num>array.length){
        return null;
    }
    let max=-Infinity;
    for(let i=0;i<array.length-num+1;i++){
        let temp=0;
        for(j=0;j<num;j++){
            temp+=array[i+j];
        }
        if(temp>max){
            max=temp;
        }
    }
    return max;
}
//On**2

console.log(subarray([1,2,5,2],1))