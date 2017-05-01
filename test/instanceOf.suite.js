'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');

global.window = global;

suite('instanceOf', () => {
    require('../solutions/instanceOf');

    const testDescriptors = [
        {instance: null, type: Object, message: `calling with null and Object`},
        {instance: 4, type: Number, message: `calling with 4 and Number`},
        {instance: true, type: Boolean, message: `calling with true and Boolean`},
        {instance: 'str', type: String, message: `calling with 'str' and String`},
        {instance: {}, type: Object, message: `calling with {} and Object`},
        {instance: {}, type: Array, message: `calling with {} and Array`},
        {instance: [], type: Object, message: `calling with [] and Object`},
        {instance: [], type: Array, message: `calling with [] and Array`}
    ]

    testDescriptors.forEach(desc => {
        test(desc.message, () => {
            expect(instanceOf(desc.instance, desc.type)).to.equal(desc.instance instanceof desc.type);
        });
    });
});
