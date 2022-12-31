function naiveString(long,short){
    let count=0;
    for(let i=0;i<long.length;i++){
        for(j=0;j<short.length;j++){
            console.log(short[j],long[i+j])
            if(short[j]!=long[i+j]) 
            console.log("break")
            break;
            if(j===short.length-1) count++;
        }
    }
    return count;
}
// console.log(naiveString("lorie loled","p"))
let array=[1,2,3,5],n=5;
function MissingNumber(array,n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    for(let i=0;i<array.length;i++){
        sum-=array[i];
    }
    return sum;
}
console.log(MissingNumber([1,2,3,5],5))