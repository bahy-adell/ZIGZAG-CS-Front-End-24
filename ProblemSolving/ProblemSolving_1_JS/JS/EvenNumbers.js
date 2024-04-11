// problem ---> https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/B

function EvenNumbers(num){
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
let num = prompt("Please enter a number:");
EvenNumbers(num);