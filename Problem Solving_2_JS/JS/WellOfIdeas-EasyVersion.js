//  problem ---> https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x){
    let sum = 0;

    for (let i = 0; i < x.length; i++) {
        if(x[i]==="good"){
            sum++;
        }
    }
    if (sum===2||sum===1){ return 'Publish!';}
    if (sum>2){ return 'I smell a series!';}
    if (sum===0){return 'Fail!';}
    
    
}

console.log (well(["bad","good","bad","bad","bad","bad","bad","bad","bad","bad","good","bad"]));