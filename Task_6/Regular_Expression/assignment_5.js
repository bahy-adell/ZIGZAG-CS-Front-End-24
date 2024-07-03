

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let dateRe = /\d{2}\s?-?\s?\/?\d{2}\s?-?\s?\/?\d{2,}/g; 

console.log(date1.match(dateRe)); 
console.log(date2.match(dateRe)); 
console.log(date3.match(dateRe)); 
console.log(date4.match(dateRe)); 
