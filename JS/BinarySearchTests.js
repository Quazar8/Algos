const binarySearch = require('./BinarySearch')
const assert = require('assert')
let arrOdd = [-12, -2, -1, 0, 1, 4, 5, 17, 19]
let arrEven = [-3, -1, 0, 2, 34, 65]

describe('Binary Search', () => {
    describe('Array with even number of members', arrayTests(arrEven))
})

function arrayTests(arr) {
    return () => {
        let last = arr.length - 1
        let mid = Math.floor(last / 2)
        it('should return index in the middle', () => {
            assert.strict.equal(binarySearch(arr, arr[mid]), mid)
        })
        it('should return middle index + 1', () => {
            assert.strict.equal(binarySearch(arr, arr[mid + 1]), mid + 1)
        })

        it('should return middle index - 1', () => {
            assert.strict.equal(binarySearch(arr, arr[mid - 1]), mid - 1)
        })
        it('should return last index', () => {
            assert.strict.equal(binarySearch(arr, arr[last]), last)
        })
        it('should return first index', () => {
            assert.strict.equal(binarySearch(arr, arr[0]), 0)
        })
    }
}
