const expect = require('chai').expect;
const isOddOrEven = require('./02. Even Or Odd');

describe('Even or odd', () => {
    it('Should be undefined', () => {
        let string = 3;
        let expectedResult = undefined;
        let actualResult = isOddOrEven(string);

        expect(expectedResult).to.equal(actualResult);
    })
    it('Should be even', () => {
        let string = 'Simona';
        let expectedResult = 'even';
        let actualResult = isOddOrEven(string);

        expect(expectedResult).to.equal(actualResult);
    })
    it('Should be odd', () => {
        let string = 'Hello';
        let expectedResult = 'odd';
        let actualResult = isOddOrEven(string);

        expect(expectedResult).to.equal(actualResult);
    })
})