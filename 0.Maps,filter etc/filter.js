function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(console.log("c"));
      }, 2000);
    });
  }
  function resolveAfter1Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(console.log("d"));
      }, 0);
    });
  }

async function x1(){
    console.log('a');

    console.log('b');
    let x=await resolveAfter2Seconds();
    let y=await resolveAfter1Seconds();
    // await setTimeout(() => console.log('c'), 1000)
        
    console.log('e');
}
x1();