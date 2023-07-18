const expect = require('chai').expect;
const isSymmetric = require('./05. Check for Symmetry');

describe('Check for symmetry', () => {
    it('Should be false', () => {
        let arr = [1,2,3,4,2,1];
        let expectedResult = false;
        let actualResult = isSymmetric(arr);

        expect(expectedResult).to.equal(actualResult);
    });
    it('Should be false', () => {
        let arr = [-1,2,1];
        let expectedResult = false;
        let actualResult = isSymmetric(arr);

        expect(expectedResult).to.equal(actualResult);
    });
    it('Should be true', () => {
        let arr = [1];
        let expectedResult = true;
        let actualResult = isSymmetric(arr);

        expect(expectedResult).to.equal(actualResult);
    });
    it('Should be true or false', () => {
        let arr = [5,'hi',{a:5},new Date(),{a:5},'hi',5];
        let expectedResult = true;
        let actualResult = isSymmetric(arr);

        expect(expectedResult).to.equal(actualResult);
    });
    it('Should be false', () => {
        let expectedResult = false;
        let actualResult = isSymmetric(1,2,2,1);

        expect(expectedResult).to.equal(actualResult);
    });
});