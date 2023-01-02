function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let low = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[low] > arr[j]) {
                low = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[low];
        arr[low] = temp
    }
    return arr;

}
console.log(selectionSort([2, 1, 3, 4]))