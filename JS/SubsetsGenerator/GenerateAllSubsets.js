//geration all subsets including the empty set
let generateSubsets = (arr) => {
    let subsets = []
    let current = []

    let rec = (index) => {
        if(index === arr.length) {
            subsets.push(current.slice())
        } else {
            rec(index + 1)
            current.push(arr[index])
            rec(index + 1)
            current.pop()
        }
    }

    rec(0)
    return subsets
}