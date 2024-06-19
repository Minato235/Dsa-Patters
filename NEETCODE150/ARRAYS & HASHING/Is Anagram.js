class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hash={};
        let hash2={};
        if(s.length!==t.length) return false;
        for(let x of s){
            hash[x]=(hash[x]||0)+1;
        }
        for(let x of t){
            hash2[x]=(hash2[x]||0)+1;
        }
        // console.log(hash)
        // console.log(hash2)

        for(let key in hash){
            if(hash[key]!=hash2[key]){
                return false;
            }
        }
        return true;

    }
}
let solution = new Solution();

let s = "jar", t = "jam"


console.log(solution.isAnagram(s,t));
