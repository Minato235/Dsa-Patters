




function Binarysearch(array,val){
    let min=0,max=array.length-1;
 while(min<=max){
    let mid=Math.floor((max+min)/2);
    // let current=array[mid];
    if(array[mid]>val){
        max=mid-1;
    }else if(array[mid]<val){
        min=mid+1;
    }else{
        return mid;
    }
 }
 return -1;
    }
//O(log n)
console.log(Binarysearch([1,2,3,4,5],2));