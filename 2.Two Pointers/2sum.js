var twoSum = function (numbers, target) {
    let l = 0, r = numbers.length - 1;
    while (l <= r) {

        if (numbers[l] + numbers[r] == target) {
            return [l, r]

        } else if (numbers[l] + numbers[r] > target) {
            r--;
        } else {
            left++;

        }
    }
    return [-1, -1];

};

let numbers = [2, 3, 4], target = 6



console.log(twoSum(numbers, target))
