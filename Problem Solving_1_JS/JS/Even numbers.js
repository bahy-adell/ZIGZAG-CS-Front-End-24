/* B. Even Numbers
Given a number N. Print all even numbers between 1 and N inclusive in separate lines.

*/
function EvenNumbers(num){
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
let num = prompt("Please enter a number:");
EvenNumbers(num);