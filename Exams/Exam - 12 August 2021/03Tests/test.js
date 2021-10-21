let { expect } = require('chai');
let { cinema } = require('./cinema');

describe('Test showMovies funcionality', () => {
    it('expect return string message', () => {
        expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
    })
    it('expect return correct', () => {
        expect(cinema.showMovies(['a','b'])).to.equal('a, b');
        expect(cinema.showMovies([false,'b'])).to.equal('false, b');
        expect(cinema.showMovies([NaN,'b'])).to.equal('NaN, b');
        expect(cinema.showMovies([NaN,NaN])).to.equal('NaN, NaN');
        expect(cinema.showMovies(['a'])).to.equal('a');
        expect(cinema.showMovies([2,2])).to.equal('2, 2');
    })

})
describe('Test ticketPrice funcionality', () => {
    it('expect return price', () => {
        expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        expect(cinema.ticketPrice('Discount')).to.equal(5.50);
    })
    it('expect throw Error on input type', () => {
        expect(() => cinema.ticketPrice('a')).to.throw();
        expect(() => cinema.ticketPrice(1)).to.throw();
        expect(() => cinema.ticketPrice(null)).to.throw();
        expect(() => cinema.ticketPrice(undefined)).to.throw();
        expect(() => cinema.ticketPrice(false)).to.throw();
        expect(() => cinema.ticketPrice(true)).to.throw();
        expect(() => cinema.ticketPrice(NaN)).to.throw();
        expect(() => cinema.ticketPrice(-5)).to.throw();
    })

})
describe('Test swapSeatsInHall funcionality', () => {
    it('expect return message - Unsuccessful change of seats in the hall.', () => {
        expect(cinema.swapSeatsInHall('asd',1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(0,1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(-2,1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(25,1)).to.equal('Unsuccessful change of seats in the hall.');

        expect(cinema.swapSeatsInHall('25','1')).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(false,true)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(5)).to.equal('Unsuccessful change of seats in the hall.');

        expect(cinema.swapSeatsInHall(1,'asd')).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1,0)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(0,0)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(-10,-10)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(-10,-1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1,-2)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1,25)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(25,26)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');

        expect(cinema.swapSeatsInHall(2,2)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall('2','2')).to.equal('Unsuccessful change of seats in the hall.');
    })
    it('expect return message - Successful change of seats in the hall.', () => {
        expect(cinema.swapSeatsInHall(1,2)).to.equal('Successful change of seats in the hall.');
    })
})