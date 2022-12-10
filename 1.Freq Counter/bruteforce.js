function same(array1, array2) {
    if (array1.length != array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        let index = array2.indexOf(array1[i] ** 2);
        console.log(index)
        if (index === -1) {
            return false;
        }
        console.log(array2)
        array2.splice(index, 1);
    }
    return true;
}
//Quadratic realtion O(n**2)
function same2(n1,n2){
    if(n1.length!=n2.length){
        return false;
    }
    for(const i in n1){ //in means index(0,1,2) || of means 1,2,3
        console.log(i)
        let idx=n2.indexOf(n1[i]**2);
        if(idx==-1){
             return false;
        }
        console.log(n2)
        n2.splice(idx,1);
    }
    return true;
}

console.log(same2([1, 2, 3], [1, 4, 9]));