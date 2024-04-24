
function Binarysearch(arr, key) {
    let first = 0;
    let last = arr.length - 1;
    let mid;

    while (first <= last) {
        mid = Math.floor((first + last) / 2);
        if (arr[mid] === key) {
            return mid;
        }
        if (arr[mid] > key) {
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }
    return -1;
   
}
arr = [1, 2, 3, 4, 5, 6];
console.log(Binarysearch(arr, 7));//-1 not found
console.log(Binarysearch(arr, 5));// index 4