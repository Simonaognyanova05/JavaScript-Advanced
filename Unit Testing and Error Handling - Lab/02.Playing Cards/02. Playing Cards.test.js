const assert = require('assert').strict;
const solve = require('./02. Playing Cards');

it('Test for task 2', () => {
    let actualResult = solve('A', 'S');
    let exitedResult = 'A♠';

    assert.equal(actualResult, exitedResult);
})