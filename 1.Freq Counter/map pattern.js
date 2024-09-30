var intersect = function(nums1, nums2) {
    let res=[];
   let map=new Map();
 for(let x of nums1){
    map.set(x,(map.get(x)||0)+1)
 }
 for(let x of nums2){
    if(map.get(x)){
        res.push(x)
        map.set(x,map.get(x)-1);
    }
 }
 return res;
};
let nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(intersect(nums1,nums2))