let { expect } = require('chai');
let { testNumbers } = require('./testNumbers');

describe('Test testNumbers sumNumbers funcionality', () => {
    it('expect undefined on input type', () => {
        expect(testNumbers.sumNumbers('string', 5)).to.equal(undefined);
        expect(testNumbers.sumNumbers(5, 'string')).to.equal(undefined);
        expect(testNumbers.sumNumbers(5, false)).to.equal(undefined);
        expect(testNumbers.sumNumbers(false, 5)).to.equal(undefined);
    })
    it('expect correct on input type', () => {
        expect(testNumbers.sumNumbers(5, 5)).to.equal('10.00');
        expect(testNumbers.sumNumbers(5.45, 5)).to.equal('10.45');
        expect(testNumbers.sumNumbers(5.45, 5.45)).to.equal('10.90');
        expect(testNumbers.sumNumbers(5, 5.45)).to.equal('10.45');
        expect(testNumbers.sumNumbers(-5, 5.45)).to.equal('0.45');
        expect(testNumbers.sumNumbers(5, -5.45)).to.equal('-0.45');
        expect(testNumbers.sumNumbers(-5, -5.45)).to.equal('-10.45');
    })
})
describe('Test testNumbers numberChecker funcionality', () => {
    it('expect throw Error on input type', () => {
        expect(() => testNumbers.numberChecker('a')).to.throw();
    })

    it('expect correct on input type', () => {
        expect(testNumbers.numberChecker('5')).to.equal('The number is odd!');
        expect(testNumbers.numberChecker('4')).to.equal('The number is even!');
        expect(testNumbers.numberChecker(5)).to.equal('The number is odd!');
        expect(testNumbers.numberChecker(4)).to.equal('The number is even!');
    })
})
describe('Test testNumbers arraySum funcionality', () => {
    
    it('expect correct on input type', () => {
        expect(testNumbers.averageSumArray([1,2,3])).to.equal(2);
    })
})