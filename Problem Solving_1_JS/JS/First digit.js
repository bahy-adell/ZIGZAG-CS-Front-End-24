/* P. First digit 
    Given a number X. Print "EVEN" if the first digit of X is even number. Otherwise print "ODD".

For example: In 4569 the first digit is 4, the second digit is 5, the third digit is 6 and the fourth digit is 9

*/

function FirstDigit (num){
    let firstDigit =parseInt(num.toString()[0]);
    if (firstDigit % 2 === 0) {
        console.log("EVEN");
    } else {
        console.log("ODD");
    }
}
let num = prompt("Please enter a number:");
FirstDigit (num);
