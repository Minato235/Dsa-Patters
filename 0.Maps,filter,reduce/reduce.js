let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] ;

let total =studentRecords.reduce(((acc,emp)=>acc+emp.marks),0)
let str=studentRecords.reduce(((acc,emp)=>acc+emp.name),"")
console.log(str)
