function countDown(num){
    if(num<=0){
        console.log("Done!!!"); 
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
// countDown(5)
function range(num){
    if(num==1) return 1;
    return num+range(num-1);
}
// console.log(range(3))
function factorial(num){
    if(num==1) return 1;
    return num*factorial(num-1);
}
console.log(factorial(3))
