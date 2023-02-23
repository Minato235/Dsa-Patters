function sum(a){
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(sum(1)(2)(3))
const sum1=sum(1);
console.log(sum1)
// Regular Function.
function Greet() {
    console.log("Welcome to GFG!");
};
// Execution of Regular Function.
Greet();

// IIFE creation and execution.
(function() {
    console.log("Welcome to GFG!");
})();