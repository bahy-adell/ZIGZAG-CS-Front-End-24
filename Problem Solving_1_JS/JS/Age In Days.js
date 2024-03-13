/* R. Age in Days
Given a Number N corresponding to a person's age (in days). 
Print his age in years, months and days, followed by its respective message "years", "months", "days".
Note: consider the whole year has 365 days and 30 days per month.

*/

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