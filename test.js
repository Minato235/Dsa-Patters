function countPairs(hours) {
   let count = 0;
   let remainderFreq = {};

   for (let hour of hours) {
       let remainder = hour % 24;
       console.log(remainder)
       let complement = (24 - remainder) % 24;

       if (remainderFreq[complement] !== undefined) {
           count += remainderFreq[complement];
       }

       if (remainderFreq[remainder] !== undefined) {
           remainderFreq[remainder] += 1;
       } else {
           remainderFreq[remainder] = 1;
       }
   }

   return count;
}

// Example Usage
console.log(countPairs([12, 12, 30, 24, 24])); // Output: 2
// console.log(countPairs([72, 48, 24, 3]));      // Output: 3
