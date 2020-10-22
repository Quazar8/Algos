const binarySearch = require('./BinarySearch')
const assert = require('assert')
let arrOdd = [-12, -2, -1, 0, 1, 4, 5, 17, 19]
//           0   1   2  3  4  5  6  7   8
let arrEven = [-3, -1, 0, 2, 34, 65]
//              0   1  2  3  4   5  
describe('Binary Search', () => {
    describe('Array with even number of members', () => {
        let last = arrEven.length - 1
        let mid = Math.floor(last / 2)
        it('should return index in the middle', () => {
            assert.strict.equal(binarySearch(arrEven, arrEven[mid]), mid)
        })
        it('should return middle index + 1', () => {
            assert.strict.equal(binarySearch(arrEven, arrEven[mid + 1]), mid + 1)
        })

        it('should return middle index - 1', () => {
            assert.strict.equal(binarySearch(arrEven, arrEven[mid - 1]), mid - 1)
        })
        it('should return last index', () => {
            assert.strict.equal(binarySearch(arrEven, arrEven[last]), last)
        })
        it('should return first index', () => {
            assert.strict.equal(binarySearch(arrEven, arrEven[0]), 0)
        })
    })
})
