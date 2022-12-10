function sumZero(array){
     let left=0,right=array.length-1;
     while(left<right){
        let sum=array[left]+array[right];
        if(sum===0){
            return [array[left],array[right]];
        }else if(sum>0){
            right--;
        }else{
            left--;
        }
     }
     return "not there"
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-3,5]));