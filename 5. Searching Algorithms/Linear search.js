function Linear(array, val) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == val)
            return i;
    }
    return -1
}
//ON
// console.log(Linear([1,12,34],34))
function search(A, key) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] == key) return i;
    }
    return 1;
}
//    console.log(search([5,6,7,8,9,10,1,2,3],10))

function minAnd2ndMin(arr, n) {
  let obj={}; const store = new Array(2)
  for(let i of arr){
obj[i]=(obj[i]||0)+1
  }
  for(let key in obj){
    store.push(parseInt(key))
    // console.log(key)
}
console.log(store)
return store;
}
 minAnd2ndMin([5,6,7,8,9,10,1,2,],8)