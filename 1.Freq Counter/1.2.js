function validAnagram(array1,array2){
    if(array1.length!=array2.length){
        return false;
    }
    let obj1={};
    let obj2={};
    for(const i of array1){
        obj1[i]=(obj1[i] || 0)+1;
    }
    for(const  i of array2){
        obj2[i]=(obj2[i] || 0)+1;
    }
    console.log(obj1);
    console.log(obj2);
 //obj 1 consntin elements
 for(let key in obj1){
    if(!(key in obj2)){
        return false;
    }
    if(obj1[key]!=obj2[key]){
        return false
    }
 }
 return true;
}
console.log(validAnagram("anagram","nagaram"))