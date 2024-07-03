
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let newMap = new Map(Object.entries(myInfo));

console.log(newMap);
console.log(newMap.size);
console.log(newMap.has("role"));
