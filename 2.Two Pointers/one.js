function sumZero(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if((array[i]+array[j])==0){
                return [array[i],array[j]];
            }
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,5]));
console.log(sumZero([-3,5]));