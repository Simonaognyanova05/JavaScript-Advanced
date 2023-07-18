const expect = require('chai').expect;
const sum = require('./04. Sum of Numbers');

describe('Sum of numbers', () => {
    it('Should return sum of numbers', () => {
        let numbers = [1, 2, 3, 4, 5];
        let expectedSum = 15;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum)
    })
})
