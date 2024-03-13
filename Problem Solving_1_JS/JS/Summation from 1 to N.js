/*G. Summation from 1 to N
Given a number N
. Print the summation of the numbers that is between 1 and N
 (inclusive).
*/

 function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

let num = prompt("Please enter a number:");
console.log(summation(num));