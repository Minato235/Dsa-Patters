var maxArea = function(heights) {
    let l=0,r=heights.length-1,max=-Infinity;
    while(l<=r){
        //are forumula(A)=l*w
        let length=r-l
        area=length*Math.min(heights[l],heights[r]);
        max=Math.max(area,max)
        if(heights[l]<heights[r]){
            l++
        }else{
            r--;
        }
    }
    return max;
    
};
let numbers = [-1, 0, 1, 2, -1, -4];


let height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))
