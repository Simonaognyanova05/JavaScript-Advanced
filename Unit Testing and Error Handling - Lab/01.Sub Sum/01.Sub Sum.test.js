const assert = require('assert').strict;
const solve = require('./01. Sub Sum');

//Unit test
it('This is for the test', () => {
    let acturalSum = solve([10, 20, 30, 40, 50, 60], 3, 300);
    let sum = 150;

    assert.equal(acturalSum, sum);
});