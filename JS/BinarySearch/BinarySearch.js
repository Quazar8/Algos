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

module.exports = binarySearch