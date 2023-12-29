import { expect } from "chai";
import sinon from "sinon";
import { describe, it } from "mocha";

import { deepEqual, matchTypes } from "../src/index";

// // Function to compare two objects
// function deepEqual(obj1, obj2) {
//   // Your deep equality logic here
//   // You may use a library like Chai's deep equal or write your own logic
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

describe('Object Comparison Tests', () => {
  it('should compare two equal objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };

    // expect(deepEqual(obj1)).to.be.true;
  });

  it('should match type of strings', () => { })

  it('should match type of numbers', () => { })

  it('should match type of null', () => { })

  it('should match type of undefined', () => { })

  it('should match type of boolean', () => { })

  it('should match type of array', () => { })

  it('should match type of function', () => { })

  it('should match type of object', () => { })

  it('should match type of symbol', () => { })

  it('should match type of map', () => { })

  it('should match type of ', () => { })

  it('should not match type of strings', () => { })

  it('should not match type of numbers', () => { })

  it('should not match type of null', () => { })

  it('should not match type of undefined', () => { })

  it('should not match type of boolean', () => { })

  it('should not match type of array', () => { })

  it('should not match type of function', () => { })

  it('should not match type of object', () => { })

  it('should not match type of symbol', () => { })

  it('should not match type of map', () => { })

  it('should not match type of ', () => { })

  // Add more test cases for different variations and negative scenarios

  // You can use Sinon for additional assertions or to spy on function calls
  it('should spy on a function call', () => {
    const spy = sinon.spy();
    spy();
    // expect(spy.calledOnce).to.be.true;
  });
});


// console.log("compare({a: 1}, {a: '10'}): ", compare({a: 1}, {a: "10"}));
// console.log("compare([1, 2, 3, [1, 2, 3], 4, 4], [1, 2, 3, [1, 2, 3], 4, 4]): ", compare([1, 2, 3, [1, 2, 3], 4, 4], [1, 2, 3, [1, 2, 3], 4, 4]));
// console.log("compare([1, 2, 3, [1, 2, 3], 2, 4], [1, 2, 3, [1, 2, 3], 4, 2]): ", compare([1, 2, 3, [1, 2, 3], 2, 4], [1, 2, 3, [1, 2, 3], 4, 2]));

