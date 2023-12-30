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

import { is } from "../src/types";

describe('Object Comparison Tests', () => {
  it('should compare two equal objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };

    // expect(which(obj1)).to.be.true;
  });

  it('should match values of strings', () => {})

  it('should match values of numbers', () => {})

  it('should match values of null', () => {})

  it('should match values of undefined', () => {})

  it('should match values of boolean', () => {})
  
  it('should match values of array', () => {})

  it('should match values of function', () => {})
  
  it('should match values of object', () => {})

  it('should match values of symbol', () => {})

  it('should match values of map', () => {})

  it('should match values of ', () => {})

  it('should not match values of strings', () => {})

  it('should not match values of numbers', () => {})

  it('should not match values of null', () => {})

  it('should not match values of undefined', () => {})

  it('should not match values of boolean', () => {})
  
  it('should not match values of array', () => {})

  it('should not match values of function', () => {})
  
  it('should not match values of object', () => {})

  it('should not match values of symbol', () => {})

  it('should not match values of map', () => {})

  it('should not match values of ', () => {})

  it('should not handle negative case for objects with different arrays', () => {
    const obj1 = { a: [1, 2, 3], b: { c: 2 } };
    const obj2 = { a: [1, 2, 4], b: { c: 2 } };

    expect(which(obj1)).to.be.false;
  });

  // Add more test cases for different variations and negative scenarios

});

describe('Object type return Checks and Tests', () => {
  it('should ', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };

    expect(which(obj1)).to.be.true;
  });

  it('should ', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };

    expect(which(obj1)).to.be.false;
  });

  // Add more positive and negative cases based on different object types and structures

  it('should ', () => {
    const obj1 = { a: [1, 2, 3], b: { c: 2 } };
    const obj2 = { a: [1, 2, 3], b: { c: 2 } };

    expect(which(obj1)).to.be.true;
  });

  it('should ', () => {
    const obj1 = { a: [1, 2, 3], b: { c: 2 } };
    const obj2 = { a: [1, 2, 4], b: { c: 2 } };

    expect(which(obj1)).to.be.false;
  });

  // Add more test cases for different variations and negative scenarios

});


// console.log("compare({a: 1}, {a: '10'}): ", compare({a: 1}, {a: "10"}));
// console.log("compare([1, 2, 3, [1, 2, 3], 4, 4], [1, 2, 3, [1, 2, 3], 4, 4]): ", compare([1, 2, 3, [1, 2, 3], 4, 4], [1, 2, 3, [1, 2, 3], 4, 4]));
// console.log("compare([1, 2, 3, [1, 2, 3], 2, 4], [1, 2, 3, [1, 2, 3], 4, 2]): ", compare([1, 2, 3, [1, 2, 3], 2, 4], [1, 2, 3, [1, 2, 3], 4, 2]));

