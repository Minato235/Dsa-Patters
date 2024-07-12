var characterReplacement = function (s, k) {
    let l = 0, res = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], 1 + (map.get(s[i]) || 0))
        let len = i - l + 1;
        if ((len - Math.max(...map.values())) > k) {
            map.set(s[l], map.get(s[l])- 1)
            l++;
        }
        res = Math.max(res, i - l + 1);

    }
    return res;

};



let s = "AABABBA", k = 2;
console.log(characterReplacement(s, k)); // Outputs: 5

