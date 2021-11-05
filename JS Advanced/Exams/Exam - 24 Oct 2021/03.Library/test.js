let { expect } = require('chai');
let { library } = require('./library');

describe('Test library calcPriceOfBook funcionality', () => {
    it('expect throw Error on input type 1', () => {
        expect(() => library.calcPriceOfBook(false, 1988)).to.throw();
        expect(() => library.calcPriceOfBook(null, 1988)).to.throw();
        expect(() => library.calcPriceOfBook(undefined, 1988)).to.throw();
        expect(() => library.calcPriceOfBook(5, 1998)).to.throw();
        expect(() => library.calcPriceOfBook('asd', false)).to.throw();
        expect(() => library.calcPriceOfBook('asd', 'qwe')).to.throw();
        expect(() => library.calcPriceOfBook('asd', null)).to.throw();
        expect(() => library.calcPriceOfBook(5, undefined)).to.throw();
        expect(() => library.calcPriceOfBook(undefined, undefined)).to.throw();
        expect(() => library.calcPriceOfBook(5, 'undefined')).to.throw();
    })
    it('expect throw Error on input type 2', () => {
        expect(() => library.calcPriceOfBook(2.5, 'string')).to.throw();
    })
    it('expect throw Error on input type 3', () => {
        expect(() => library.calcPriceOfBook(1988, 'string')).to.throw();
        expect(() => library.calcPriceOfBook(21, 1978)).to.throw();
    })

    it('expect over 1980 - 1', () => {
        expect(library.calcPriceOfBook('Oho', 1950)).to.equal('Price of Oho is 10.00');
    })
    it('expect over 1980 - 2', () => {
        expect(library.calcPriceOfBook('Oho', 1980)).to.equal('Price of Oho is 10.00');
    })
    it('expect under 1980 - 1', () => {
        expect(library.calcPriceOfBook('Oho', 1979)).to.equal('Price of Oho is 10.00');
    })
    it('expect under 1980 - 2', () => {
        expect(library.calcPriceOfBook('Oho', -20)).to.equal('Price of Oho is 10.00');
    })
})
describe('Test library findBook funcionality', () => {
    it('expect throw Error on input type 1', () => {
        expect(() => library.findBook([], 1988)).to.throw();
    })
    it('expect throw Error on input type 2', () => {
        expect(() => library.findBook([], 'ee')).to.throw();
    })
    it('expect throw Error on input type 3', () => {
        expect(() => library.findBook([], false)).to.throw();
    })
    it('expect throw Error on input type 4', () => {
        expect(() => library.findBook([], 2.5)).to.throw();
    })
})
describe('Test library findBook funcionality', () => {
    it('expect return We found the book you want. - 1', () => {
        expect(library.findBook(['Oho', 'asd'], 'Oho')).to.equal('We found the book you want.');
    })
    it('expect return We found the book you want. - 2', () => {
        expect(library.findBook([1, 2], 2)).to.equal('We found the book you want.');
    })
})
describe('Test library findBook funcionality', () => {
    it('expect return The book you are looking for is not here! - 1', () => {
        expect(library.findBook(['Oho', 'asd'], 'e')).to.equal('The book you are looking for is not here!');
    })
    it('expect return The book you are looking for is not here! - 1', () => {
        expect(library.findBook([1, 2], 3)).to.equal('The book you are looking for is not here!');
        expect(library.findBook(['thor', 'ee'], 'qwe')).to.equal('The book you are looking for is not here!');
        expect(library.findBook([1], 2)).to.equal('The book you are looking for is not here!');
        expect(library.findBook(['tt','tee'], false)).to.equal('The book you are looking for is not here!');
        expect(library.findBook(['tt','tee'], null)).to.equal('The book you are looking for is not here!');
        expect(library.findBook(['tt','tee'], undefined)).to.equal('The book you are looking for is not here!');
    })
})
describe('Test library arrangeTheBooks funcionality', () => {
    it('expect return Error - 1', () => {
        expect(() => library.arrangeTheBooks('as')).to.throw();
        expect(() => library.arrangeTheBooks(false)).to.throw();
        expect(() => library.arrangeTheBooks(null)).to.throw();
        expect(() => library.arrangeTheBooks(undefined)).to.throw();
        expect(() => library.arrangeTheBooks('')).to.throw();
    })
    it('expect return Error - 2', () => {
        expect(() => library.arrangeTheBooks(-5)).to.throw();
        expect(() => library.arrangeTheBooks(-5.5)).to.throw();
        expect(() => library.arrangeTheBooks(-95)).to.throw();
    })
    it('expect return Great job, the books are arranged. - 1', () => {
        expect(library.arrangeTheBooks(30)).to.equal('Great job, the books are arranged.');
        expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');

    })
    it('expect return Great job, the books are arranged. - 2', () => {
        expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');

    })
    it('expect return Great job, the books are arranged. - 3', () => {
        expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
        expect(library.arrangeTheBooks(60)).to.equal('Insufficient space, more shelves need to be purchased.');

    })
})