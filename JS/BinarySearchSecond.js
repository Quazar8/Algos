const binarySearch = require("./BinarySearch")

let f = (x) => Math.floor(x)
let arr = [0, 1, 2, 3, 4]

let binarySearchSecond = (arr, val) => {
    let mid = 0
    let n = arr.length 
    for(let k = f(n/2); k >= 1; k = f(k / 2)){
        while(mid + k < n && arr[mid + k] <= val)
            mid += k
    }

    if(arr[mid] === val) return mid;
    return -1 
}

console.log(binarySearchSecond(arr, 5))