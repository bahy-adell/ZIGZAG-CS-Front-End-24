//  problem ---> https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript

function toCsvText(array) {
    let csvString = '';
    for (let i = 0; i < array.length; i++) {
        csvString += array[i].join(',');
        if (i !== array.length - 1) {
            csvString += '\n';
        }
    }
    return csvString;
}


const inputArray = [
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
];

console.log(toCsvText(inputArray));
    
 









