function Linear(array,val){
    for(var i=0;i<array.length;i++){
        if(array[i]==val)
            return i; 
    }
    return -1
}
//ON
console.log(Linear([1,12,34],34))