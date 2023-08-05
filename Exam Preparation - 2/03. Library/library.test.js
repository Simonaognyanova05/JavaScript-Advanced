const library = require('./library');
const {assert, expect} = require('chai');

describe('Library tests', () => {
    describe('calcPriceOfBook', () => {
        it('Should throw error for name', () => {
            expect(()=>library.calcPriceOfBook(1,1)).to.throw('Invalid input');
        })
        it('Should throw error for year', () => {
            expect(()=>library.calcPriceOfBook('1','1')).to.throw('Invalid input');
        })
        it('Valid data and year is below 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1943)).to.equal(`Price of The Little Prince is 10.00`);
        })
        it('Valid data and year is equal is 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1980)).to.equal(`Price of The Little Prince is 10.00`);
        })
        it('Valid data and year greater than 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1990)).to.equal(`Price of The Little Prince is 20.00`);
        })
        
    })
    describe('findBook', () => {
        it('Should throw error for empty array', () => {
            expect(()=>library.findBook([], 'The little prince')).to.throw('No books currently available');
        })
        it('Valid data - available book', () => {
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Troy')).to.equal('We found the book you want.');
        })
        it('Valid data - not available book', () => {
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Js')).to.equal('The book you are looking for is not here!');
        })
    })
    describe('arrangeTheBooks', () => {
        it('Should throw error for invalid input', () => {
            expect(()=>library.arrangeTheBooks('test')).to.throw('Invalid input');
        })
        it('Should throw error for negative number', () => {
            expect(()=>library.arrangeTheBooks(-100)).to.throw('Invalid input');

        })
        it('Valid data - less than available space (39)', () => {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
        })
        it('Valid data - less than available space 40)', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        })
        it('Valid data - less than available space 45)', () => {
            expect(library.arrangeTheBooks(45)).to.equal('Insufficient space, more shelves need to be purchased.');
        })
    })
})