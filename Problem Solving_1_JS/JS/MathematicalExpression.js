// problem ---> https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/W

let num1 = prompt("Please enter a number1:");
let sign = prompt("Please enter a sign:");
let num2 = prompt("Please enter a number2:");
let result = prompt("Please enter a result:");

function MathematicalExpression(num1,num2,result,sign){
     num1 = parseInt(num1);
     num2 = parseInt(num2);
     result= parseInt(result);
   switch(sign){
        case "+":
          var res = num1 + num2;
            if(res === result){
                return "yes" ;
            }else  return res ;
            break;
        case "-":
             res = num1 - num2;
            if(res === result){
                return "yes" ;
            }else  return res ;
            break;
        case "*":
            res = num1 * num2;
            if(res === result){
            return "yes" ;
            }else  return res ;
            break;    
   }
}
console.log( MathematicalExpression(num1,num2,result,sign));
