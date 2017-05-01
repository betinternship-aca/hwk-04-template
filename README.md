# homework 04

please edit files in solutions folder to provider following functionality

  - *classNameOf*
    should return class name of given value. e.g.
    ```javascript
    classNameOf([]) // 'Array'
    classNameOf({}) // 'Object'
    classNameOf(null) // 'Null'
    ```
  - *isArray*
    should work as `Array.isArray`
  - *instanceOf*
    should work like `instanceof` operator.
  - *createEnum*
    should take an array as argument items of which are either `string` or `Object`. `createEnum` should return an `Object` properties of which are enumerated values, which are counted from 0 if not specified. If the item in array is `Object` then it should have an interface like this: `{ name: string, value: number }`, so for the case of `Object` you should define a property named with the value of `name` property of that object and set the value of that property to be equal to `value` property of the config object and you should continue enumeration from that value. Also all the properties of the returned enum object should be `enumerable` but not `configurable` and not `writable`.
