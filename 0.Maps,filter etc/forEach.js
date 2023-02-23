//forEach
const array1 = ['a', 'b', 'c'];
array1.forEach(ele=>{
    console.log(ele)
})

var arr = [3, 5, 7];
arr.foo = "hello";
    
for (var i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}
console.log("======of=====")
    
for (var i of arr) {
  console.log(i); // logs "3", "5", "7"
  // it doesn't log "3", "5", "7", "hello"
}