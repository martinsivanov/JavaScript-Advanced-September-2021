let { expect } = require('chai');
let { mathEnforcer } = require('./module');

describe('Test mathEnforcer addFive funcionality', () => {
    it('expect undefined on input type', () => {
        expect(mathEnforcer.addFive('string')).to.equal(undefined);
        expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
        expect(mathEnforcer.addFive(null)).to.equal(undefined);
        expect(mathEnforcer.addFive('')).to.equal(undefined);
        expect(mathEnforcer.addFive(true)).to.equal(undefined);
        expect(mathEnforcer.addFive(false)).to.equal(undefined);
    })
    it('expect correcct input type', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
        expect(mathEnforcer.addFive(-5)).to.equal(0);
        expect(mathEnforcer.addFive(-2.5)).to.equal(2.5);
        expect(mathEnforcer.addFive(0.5)).to.equal(5.5);
    })
});

describe('Test mathEnforcer subtractTen funcionality', () => {
    it('expect undefined on input type', () => {
        expect(mathEnforcer.subtractTen('string')).to.equal(undefined);
        expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
        expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
        expect(mathEnforcer.subtractTen('')).to.equal(undefined);
        expect(mathEnforcer.subtractTen(false)).to.equal(undefined);
        expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
    })
    it('expect correcct input type', () => {
        expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        expect(mathEnforcer.subtractTen(0.5)).to.equal(-9.5);
        expect(mathEnforcer.subtractTen(-0.5)).to.equal(-10.5);
    })
});
describe('Test mathEnforcer sum funcionality', () => {
    it('expect undefined on input type', () => {
        expect(mathEnforcer.sum('string',5)).to.equal(undefined);
        expect(mathEnforcer.sum(null,5)).to.equal(undefined);
        expect(mathEnforcer.sum(undefined,5)).to.equal(undefined);
        expect(mathEnforcer.sum('',5)).to.equal(undefined);
        expect(mathEnforcer.sum(false,5)).to.equal(undefined);

        expect(mathEnforcer.sum(5,null)).to.equal(undefined);
        expect(mathEnforcer.sum(5,undefined)).to.equal(undefined);
        expect(mathEnforcer.sum(5,'')).to.equal(undefined);
        expect(mathEnforcer.sum(5,'string')).to.equal(undefined);
        expect(mathEnforcer.sum(false,'string')).to.equal(undefined);
    })
    it('expect correcct input type', () => {
        expect(mathEnforcer.sum(5,5)).to.equal(10);
        expect(mathEnforcer.sum(-5,5)).to.equal(0);
        expect(mathEnforcer.sum(5,-5)).to.equal(0);
        expect(mathEnforcer.sum(-5,-5)).to.equal(-10);
        expect(mathEnforcer.sum(-0.5,1.5)).to.equal(1);
        expect(mathEnforcer.sum(1,-0.5)).to.equal(0.5);
    })
});