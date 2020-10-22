const binarySearch = require('./BinarySearch')
const assert = require('assert')
let arrOdd = [-12, -2, -1, 0, 1, 4, 5, 17, 19]
//           0   1   2  3  4  5  6  7   8
let arrEven = [-3, -1, 0, 2, 34, 65]
//              0   1  2  3  4   5  
describe('Binary Search', () => {
    describe('Array with even number of members', () => {
        it('should return index in the middle #1', () => {
            assert.strict.equal(binarySearch(arrEven, 0), 2)
        })
    })
})
