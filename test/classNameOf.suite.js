'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs');

global.window = global;

suite('classNameOf', () => {
    require('../solutions/getName');
    require('../solutions/classNameOf');
    const code = fs.readFileSync('solutions/classNameOf.js', {encoding: 'utf8'});
    const isObject = value => typeof value === 'object';
    const isString = value => typeof value === 'string';
    const strPrimitive = value => isString(value) ? `'${value}'` : value;
    const strForm = value => isObject(value) ? JSON.stringify(value) : strPrimitive(value);

    const nameValuePair = [
        {name: 'Array', value: []},
        {name: 'Object', value: {}},
        {name: 'Null', value: null},
        {name: 'Undefined', value: undefined},
        {name: 'Number', value: 1},
        {name: 'Number', value: NaN},
        {name: 'String', value: 'str'},
        {name: 'Boolean', value: false}
    ]

    nameValuePair.forEach(desc => {
        test(`should return '${desc.name}' for ${strForm(desc.value)}`, () => {
            expect(classNameOf(desc.value)).to.equal(desc.name);
        });
    });

    test(`use your previously defined getName`, () => {
        expect(/getName\s*\(/.test(code)).to.be.true;
    });
});
