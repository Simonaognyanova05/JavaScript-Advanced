const expect = require('chai').expect;
const lookupChar = require('./03. Char Lookup');

describe('Char lookup', () => {
    it('Should be undefined', () => {
        let string = 3;
        let index = 3;

        let expectedResult = undefined;
        let actualResult = lookupChar(string, index);

        expect(expectedResult).to.equal(actualResult);
    }) 
    it('Should be undefined', () => {
        let string = 'Hello';
        let index = 3.3;

        let expectedResult = undefined;
        let actualResult = lookupChar(string, index);

        expect(expectedResult).to.equal(actualResult);
    }) 
    it('Should be "Incorrect index"', () => {
        let string = 'Hello';
        let index = 6;

        let expectedResult = "Incorrect index";
        let actualResult = lookupChar(string, index);

        expect(expectedResult).to.equal(actualResult);
    })
    it('Should be "Incorrect index"', () => {
        let string = 'Hello';
        let index = -6;

        let expectedResult = "Incorrect index";
        let actualResult = lookupChar(string, index);

        expect(expectedResult).to.equal(actualResult);
    })
    it('Should be "Incorrect index"', () => {
        let string = 'Hello';
        let index = 3;

        let expectedResult = string.charAt(index);
        let actualResult = lookupChar(string, index);

        expect(expectedResult).to.equal(actualResult);
    })
})