//not optimisted
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            console.log(arr)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([5,4,3,2,1]))
console.log(bubbleSort([2, 1, 3, 4]))
console.log("======>========================>")


function bubbleSortOp(arr) {
    var noSwap;
    for (let i = 0; i < arr.length; i++) {
        noSwap = true;
        for (let j = 0; j < arr.length - 1; j++) {
            console.log(arr)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap == true) break;
    }
    return arr;
}
console.log(bubbleSortOp([2, 1, 3, 4]))

// function sort012(arr, N) {
//     let noSwap;
// for(let i=0;i<arr.length;i++){
//     noSwap=true;
//     for(let j=0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//             noSwap=false;
//         }
//     }
//     if(noSwap==true) break;
// }
// return arr;
// }

// console.log(sort012([0,2,1,2,0]))
