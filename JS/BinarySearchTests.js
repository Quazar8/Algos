const binarySearch = require('./BinarySearch')
const binarySearchSecond = require('./BinarySearchSecond')
const assert = require('assert')
const MAX_NUMBER = 100000

let arrOdd = [-12, -2, -1, 0, 1, 4, 5, 17, 19]
let arrEven = [-3, -1, 0, 2, 34, 65]
let floatArr = [-0.2, -0.1, 0.0, 2.3, 2.5]
let mixed = [-3, -2.7, -1, 1, 2.3, 3.5, 6, 7.5]

describe('Binary Search', () => {
    describe('Array with even number of elements', arrayTests(arrEven))
    describe('Array with odd number of elements', arrayTests(arrOdd))
    describe('Array with floating point numbers', arrayTests(floatArr))
    describe('Array with mixed decimal and whole numbers', arrayTests(mixed))
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
        it('should return -1 when element is missing', () => {
            assert.strict.equal(binarySearch(arr, MAX_NUMBER + 1), -1)
        })
    }
}
