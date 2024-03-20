//   problem --->   https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript


function pillars(numPill, dist, width) {
    if (numPill===1){
        return 0 ;
    }else{
    
    let x = numPill - 2 ; // number of columns except the first and last  --------> x * width
    let y = numPill - 1; //  number of dist---->   y * dist
    let result = x * width + y * ( dist * 100 ) ;
    return result ;
    }
  }

  let res = pillars(11, 15, 30);
  console.log(res);