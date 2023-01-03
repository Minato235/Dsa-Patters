// function sumUnique(array){
//     let i=0;
//     for(let j=1;j<array.length;j++){
//         if(array[i]!=array[j]){
//             i++;
//             array[i]==array[j];
//         }
//     }
//     return i+1;
// }

//frquensy counter using

function sumUnique(array){
    var obj={},store2=[],store=[];
    for(const i of array){
        obj[i]=(obj[i]||0)+1;
    }
    return obj
    console.log(obj)
//map
let num=obj.map(x=>x.key)
console.log(num)
}
// console.log(sumUnique([1,1,2]));
console.log(sumUnique([3,2,1,0,1,2,3]));


//    for(let key in obj){
//         store.push(parseInt(key))
//         // console.log(key)
//     }
//     return store;