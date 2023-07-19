const expect = require('chai').expect;
const addFive = require('./04. Math Enforcer');

describe('Math Enforcer', () => {
    describe('addFive', () => {
        it('Should be undefined', () => {
            let num = '5';
            let expectedRedult = undefined;
            let actualResult = addFive(num);
            expect(expectedRedult).to.equal(actualResult);
        })
    })
   
})