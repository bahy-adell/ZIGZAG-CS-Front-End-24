
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

chars.copyWithin(2);

console.log(chars);

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]