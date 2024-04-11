// problem ---> https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/R

let num = prompt("Please enter a number of days:");
function AgeInDays(num){
    let years = Math.floor(num / 365);
    let months = Math.floor((num % 365) / 30);
    let days = num - (years * 365) - (months * 30);
    console.log(years + " years");
    console.log(months + " months");
    console.log(days + " days");
}

AgeInDays(num);