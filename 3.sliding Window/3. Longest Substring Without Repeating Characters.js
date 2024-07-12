var lengthOfLongestSubstring = function(s) {
let set=new Set();
let i=0,sum=0;
for(let x=0;x<s.length;x++){
    while(set.has(s[x])){
        set.delete(s[i]);
        i++;
    }
        set.add(s[x])
        sum=Math.max(sum,set.size)
    }
    return sum;
}



let s="qrsvbspk"

console.log(lengthOfLongestSubstring(s))