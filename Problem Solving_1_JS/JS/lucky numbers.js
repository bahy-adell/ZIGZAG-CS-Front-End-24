// M. Lucky Numbers
// Given two numbers A and B
//  . Print all lucky numbers between A and B inclusive.
//  Note:
//  The Lucky number is any positive number that its decimal representation contains only 4 and 7.
//  For example: numbers 4, 7, 47 and 744 are lucky and numbers 5, 17 and 174 are not.

 function isLucky(number) {
   let numstr = number.toString();
   for(let i=0 ; i <=numstr.length ;){
     if (numstr.charAt(i)==7 || numstr.charAt(i) ==4 ){
        i++;
      }else {
        return false ;
        break;
     }
     if (i === numstr.length ){ return true ;}
   }
}

function LuckyNumbers(num1 , num2){
    let isthere=false;
    let k =0 ;
    let output=""  ;
    for(let i=num1 ; i <=num2 ;i++){
        if (isLucky(i)){
          output += i.toString() + " ";
            isthere =true;
        } 
    }
    if(!isthere){ console.log(-1);} else {
      console.log(output.trim());
  }
    
}
let num1 =  parseInt(prompt("Please enter a number 1:"));
let num2 = parseInt(prompt("Please enter a number 2:"));
LuckyNumbers(num1 ,num2);

