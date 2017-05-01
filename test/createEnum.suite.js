'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs');

global.window = global;

suite('createEnum', () => {
    require('../solutions/createEnum');

    const simpleEnumKeys = ['Black', 'White', 'Yellow', 'Green', 'Blue'];
    const simpleEnum = createEnum(simpleEnumKeys);
    const notSimpleEnum = createEnum([{name: 'Black', value: 3}, 'White', 'Yellow', 'Green', 'Blue']);
    const complexEnum = createEnum([{name: 'Black', value: 3}, 'White', {name: 'Yellow', value: 13}, 'Green', 'Blue']);
    const checkDescriptor = desc => !desc.configurable && !desc.writable;

    test(`testing with ['Black', 'White', 'Yellow', 'Green', 'Blue']`, () => {
        expect(simpleEnum.Black).to.equal(0);
        expect(simpleEnum.White).to.equal(1);
        expect(simpleEnum.Yellow).to.equal(2);
        expect(simpleEnum.Green).to.equal(3);
        expect(simpleEnum.Blue).to.equal(4);
    });

    test(`testing with [{name: 'Black', value: 3}, 'White', 'Yellow', 'Green', 'Blue']`, () => {
        expect(notSimpleEnum.Black).to.equal(3);
        expect(notSimpleEnum.White).to.equal(4);
        expect(notSimpleEnum.Yellow).to.equal(5);
        expect(notSimpleEnum.Green).to.equal(6);
        expect(notSimpleEnum.Blue).to.equal(7);
    });

    test(`testing with [{name: 'Black', value: 3}, 'White', {name: 'Yellow', value: 13}, 'Green', 'Blue']`, () => {
        expect(complexEnum.Black).to.equal(3);
        expect(complexEnum.White).to.equal(4);
        expect(complexEnum.Yellow).to.equal(13);
        expect(complexEnum.Green).to.equal(14);
        expect(complexEnum.Blue).to.equal(15);
    });

    test(`properties should be enumerable, not writable and not configurable`, () => {
        const keys = Object.keys(simpleEnum);

        expect(keys).to.deep.equal(simpleEnumKeys);
        keys.forEach(key => {
            expect(Object.getOwnPropertyDescriptor(simpleEnum, key)).to.satisfy(checkDescriptor);
        });
    });
});
