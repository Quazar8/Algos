//generate all subsets including the empty set
let genSubsetsBinary = (arr) => {
    let n = arr.length
    let subsets = []
    for(let i = 0; i < (1<<n); i++) {
        let sub = []
        for(let a = 0; a < n; a++){
            if(i & (1<<a)) sub.push(arr[a])
        }
        subsets.push(sub)
    }

    return subsets
}