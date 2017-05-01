'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs');

global.window = global;

suite('isArray', () => {
    require('../solutions/getName');
    require('../solutions/classNameOf');
    require('../solutions/isArray');
    const code = fs.readFileSync('solutions/isArray.js', {encoding: 'utf8'});

    test(`should return true for arrays only`, () => {
        expect(isArray({})).to.be.false;
        expect(isArray('str')).to.be.false;
        expect(isArray([])).to.be.true;
    });

    test(`should use classNameOf`, () => {
        expect(/classNameOf\s*\(/.test(code)).to.be.true;
    });
});
