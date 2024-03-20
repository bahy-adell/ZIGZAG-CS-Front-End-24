// problem ---> https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/G


 function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

let num = prompt("Please enter a number:");
console.log(summation(num));