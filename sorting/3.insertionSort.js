function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
    //   let j
      for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  }
  // console.log(insertionSort([2, 1, 3, 7, 5]))
 function sort012(arr, N)
  {
for(let i=1;i<arr.length;i++){
  let curr=arr[i];
  for(var j=i-1;j>=0 && arr[j]>curr;j--){
    arr[j+1]=arr[j];
  }
  arr[j+1]=curr;
}
return arr;
  }
    console.log(sort012([2, 1, 3, 7, 5]))
