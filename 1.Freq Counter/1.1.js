function same(array1, array2) {
    if (array1.length != array2.length) {
        return false;
    }
    let idx1 = {};
    let idx2 = {};
    for (const i of array1) {
        idx1[i] = (idx1[i] || 0) + 1;
    }
    for (const i of array2) {
        idx2[i] = (idx2[i] || 0) + 1;
    }
    console.log(idx1)
    console.log(idx2)
    //done with objects
    for (let key in idx1) {
        if (!(key ** 2 in idx2)) {
            return false;
        }
        //easy
        //checking counts
        if (idx2[key ** 2] !== idx1[key]) {

            return false;
        }
    }

    return true;
}

console.log(same([1, 2, 3, 3], [1, 4, 9, 9]));
