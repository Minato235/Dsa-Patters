//bind
let mul=function(x,y){
    console.log(x*y)
}
let mul1=mul.bind(this,2);
mul1(5)

function x(){
    var a=10;
    function y(){
        console.log(a)
    }
    return y();
}
let z=x();
console.log(z)

