class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {};
        for (let x of strs) {
            let zeros = Array(26).fill(0);
            for (const s of x) {
                zeros[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            console.log(zeros)

            let key = zeros.join("#")
            console.log(key)
            if (!hash[key]) {
                hash[key] = [];
            }
            hash[key].push(x)
        }
        return Object.values(hash)

    }
}
let strs = ["act", "pots", "tops", "cat", "stop", "hat"];

let solution = new Solution();
console.log(solution.groupAnagrams(strs))

