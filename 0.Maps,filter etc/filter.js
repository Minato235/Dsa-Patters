let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

let names=studentRecords.filter(student=>student.id);
console.log(names)
let name2=studentRecords.filter(student=>student.name.length>=3)
console.log(name2)
