//tradional way
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

let names=[];
for(let i=0;i<studentRecords.length;i++){
    names.push(studentRecords[i].name)
}
// console.log(names)
let names2=studentRecords.map(student=>
    student.name
)
let id=studentRecords.map(student2=>
    student2.id)

let marks=studentRecords.map(student3=>
    student3.marks
    )
    console.log(marks)

