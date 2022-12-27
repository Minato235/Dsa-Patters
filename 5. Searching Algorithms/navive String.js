function naiveString(long,short){
    let count=0;
    for(let i=0;i<long.length;i++){
        for(j=0;j<short.length;j++){
            console.log(short[j],long[i+j])
            if(short[j]!=long[i+j]) 
            console.log("break")
            break;
            if(j===short.length-1) count++;
        }
    }
    return count;
}
console.log(naiveString("lorie loled","p"))