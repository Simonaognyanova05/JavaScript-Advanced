const expect = require('chai').expect;
const mathEnforcer = require('./04. Math Enforcer');

describe('Math Enforcer', () => {
    it('Should be undefined', () => {
        let num = '5';
        let expectedRedult = undefined;
        let actualResult = mathEnforcer.addFive(num);
        expect(expectedRedult).to.equal(actualResult);
    });
    it('Should be 10', () => {
        let num = 5;
        let expectedRedult = 10;
        let actualResult = mathEnforcer.addFive(num);
        expect(expectedRedult).to.equal(actualResult);
    })
    it('Should be undefined', () => {
        let num = '10';
        let expectedRedult = undefined;
        let actualResult = mathEnforcer.subtractTen(num);
        expect(expectedRedult).to.equal(actualResult);
    });
    it('Should be 0', () => {
        let num = 10;
        let expectedRedult = 0;
        let actualResult = mathEnforcer.subtractTen(num);
        expect(expectedRedult).to.equal(actualResult);
    })
    it('Should be undefined', () => {
        let num1 = '10';
        let num2 = 10;

        let expectedRedult = undefined;
        let actualResult = mathEnforcer.sum(num1, num2);
        expect(expectedRedult).to.equal(actualResult);
    });
    it('Should be undefined', () => {
        let num1 = 10;
        let num2 = '10';
        let expectedRedult = undefined;
        let actualResult = mathEnforcer.sum(num1, num2);
        expect(expectedRedult).to.equal(actualResult);
    });
    it('Should be 20', () => {
        let num1 = 10;
        let num2 = 10;
        let expectedRedult = 20;
        let actualResult = mathEnforcer.sum(num1, num2);
        expect(expectedRedult).to.equal(actualResult);
    })
})