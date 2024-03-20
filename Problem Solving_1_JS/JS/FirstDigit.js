// problem ---> https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/P

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
