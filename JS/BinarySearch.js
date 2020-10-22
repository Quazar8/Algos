let arr = [-12, -2, -1, 0, 1, 4, 5, 17, 19]
//           0   1   2  3  4  5  6  7   8

let compare = (a, b) => a - b

let binarySearch  = (arr, x) => {
    let lower = 0
    let upper = arr.length - 1
    while(lower <= upper){
        let mid = Math.floor((lower + upper) / 2)
        if(arr[mid] === x) return mid;

        if(arr[mid] > x) upper = mid - 1
        else lower = mid + 1
    }

    return -1
}

console.log(binarySearch(arr, 19))