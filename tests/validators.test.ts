/**
 * 
 * Package: diff-match
 * Author: Ganesh B
 * Description: 
 * Install: npm i diff-match --save
 * Github: https://github.com/ganeshkbhat/diff-match
 * npmjs Link: https://www.npmjs.com/package/diff-match
 * File: src/core/
 * File Description: Compare, match, and get the types of (primitives) objects
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import { expect } from "chai";
import sinon from "sinon";
import { describe, it } from "mocha";

import * as validators from "../src/validators";

describe('Object Comparison Tests', () => {
  it('should compare two equal objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };

    // expect(matchValues(obj1, obj2)).to.be.true;
  });

  it('should match values of ', () => {})

  it('should match values of ', () => {})

});


// console.log("match({a: 1}, {a: '10'}): ", compare({a: 1}, {a: "10"}));
// console.log("match({a: 1}, {a: 10}): ", compare({a: 1}, {a: 10}));
// console.log("match({a: 1}, {a: 1}): ", compare({a: 1}, {a: 1}));
// console.log("match([1, 2, 3, [1, 2, 3], 4], [1, 2, 3, [1, 2, 3], 4]): ", match([1, 2, 3, [1, 2, 3], 4], [1, 2, 3, [1, 2, 3], 4]));

