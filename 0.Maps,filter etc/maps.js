//tradional way


          let testCase1 = [
            {
              name: "Leo Messi",
              dob: "31-12-1995",
              biology: 95,
              chemistry: 91,
            },
            {
              name: "Cristiano Ronaldo",
              dob: "31-05-1992",
              biology: 90,
              chemistry: 81,
            },
            {
              name: "Virat Kohli",
              dob: "31-12-1995",
              biology: 95,
              chemistry: 96,
            },
            {
              name: "Rohit Sharma",
              dob: "31-12-1995",
              biology: 85,
              chemistry: 86,
            },
            {
              name: "Viswanathan Anand",
              dob: "12-12-1994",
              biology: 99,
              chemistry: 10,
            },
          ];       
          let test=testCase1.map(student=>student.biology+student.chemistry);
          console.log(test)

// let names=[];
// for(let i=0;i<studentRecords.length;i++){
//     names.push(studentRecords[i].name)
// }
// // console.log(names)
// let names2=studentRecords.map(student=>
//     student.name
// )
// let id=studentRecords.map(student2=>
//     student2.id)

// let marks=studentRecords.map(student3=>
//     student3.marks
//     )
//     console.log(marks)


