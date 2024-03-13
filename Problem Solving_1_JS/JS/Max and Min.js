/*  K. Max and Min
Given 3 numbers A, B and C, Print the minimum and the maximum numbers
*/ 

 function MinMax(num1, num2, num3) {
    let minimum = Math.min(num1, num2, num3);
    let maximum = Math.max(num1, num2, num3);

    console.log("Minimum:", minimum);
    console.log("Maximum:", maximum);
}
let num1 = prompt("Please enter a number 1:");
let num2 = prompt("Please enter a number 2:");
let num3 = prompt("Please enter a number 3:");
findMinMax(num1, num2, num3);