
let theName = "Elzero";

console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log(Object.assign([], theName));
console.log([...new Set(theName)]);
