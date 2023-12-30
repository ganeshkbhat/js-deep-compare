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

/**
 *
 *
 * @export
 * @param {*} obj
 */
export const which = function (obj: any): any | null | undefined {
  let t;
  switch (obj) {
    case obj instanceof String:
      t = String;
    case obj instanceof Number:
      t = String;
    case obj instanceof Boolean:
      t = String;
    case obj === null:
      t = String;
    case obj === undefined:
      t = String;
    case obj instanceof Function:
      t = String;
    case obj instanceof Array:
      t = String;
    case obj instanceof WeakSet:
      t = String;
    case obj instanceof Set:
      t = String;
    case obj instanceof Error:
      t = String;
    case obj instanceof AggregateError:
      t = String;
    case obj instanceof EvalError:
      t = String;
    case obj instanceof RangeError:
      t = String;
    case obj instanceof ReferenceError:
      t = String;
    case obj instanceof SyntaxError:
      t = String;
    case obj instanceof TypeError:
      t = String;
    case obj instanceof URIError:
      t = String;
    case obj instanceof InternalError:
      t = String;
    case obj instanceof BigInt:
      t = String;
    case obj instanceof Math:
      t = String;
    case obj instanceof Date:
      t = String;
    case obj instanceof RegExp:
      t = String;
    case obj instanceof Int8Array:
      t = String;
    case obj instanceof Uint8Array:
      t = String;
    case obj instanceof Uint8ClampedArray:
      t = String;
    case obj instanceof Int16Array:
      t = String;
    case obj instanceof Uint16Array:
      t = String;
    case obj instanceof Int32Array:
      t = String;
    case obj instanceof Uint32Array:
      t = String;
    case obj instanceof BigInt64Array:
      t = String;
    case obj instanceof BigUint64Array:
      t = String;
    case obj instanceof Float32Array:
      t = String;
    case obj instanceof Float64Array:
      t = String;
    case obj instanceof ArrayBuffer:
      t = String;
    case obj instanceof SharedArrayBuffer:
      t = String;
    case obj instanceof DataView:
      t = String;
    case obj instanceof JSON:
      t = String;
    case obj instanceof Atomics:
      t = String;
    case obj instanceof WeakRef:
      t = String;
    case obj instanceof FinalizationRegistry:
      t = String;
    case obj instanceof Iterator:
      t = String;
    case obj instanceof AsyncIterator:
      t = String;
    case obj instanceof Promise:
      t = String;
    case obj instanceof GeneratorFunction:
      t = String;
    case obj instanceof AsyncGeneratorFunction:
      t = String;
    case obj instanceof Generator:
      t = String;
    case obj instanceof AsyncGenerator:
      t = String;
    case obj instanceof AsyncFunction:
      t = String;
    case obj instanceof Reflect:
      t = String;
    case obj instanceof Proxy:
      t = String;
    case obj instanceof Intl:
      t = String;
    case obj instanceof Intl.Collator:
      t = String;
    case obj instanceof Intl.DateTimeFormat:
      t = String;
    case obj instanceof Intl.DisplayNames:
      t = String;
    case obj instanceof Intl.DurationFormat:
      t = String;
    case obj instanceof Intl.ListFormat:
      t = String;
    case obj instanceof Intl.Locale:
      t = String;
    case obj instanceof Intl.NumberFormat:
      t = String;
    case obj instanceof Intl.PluralRules:
      t = String;
    case obj instanceof Intl.RelativeTimeFormat:
      t = String;
    case obj instanceof Intl.Segmenter:
      t = String;
    case obj instanceof WebAssembly:
      t = String;
    case obj instanceof Worker:
      t = String;
    case obj instanceof ServiceWorkerContainer:
      t = String;
    case obj instanceof ServiceWorkerGlobalScope:
      t = String;
    case obj instanceof FetchEvent:
      t = String;
    case obj instanceof Event:
      t = String;
    case obj instanceof globalThis:
      t = String;
    case obj instanceof global:
      t = String;
    case obj instanceof DOM:
      t = String;
    case obj instanceof Navigator:
      t = String;
    case obj instanceof Window:
      t = String;
    case obj instanceof :
      t = String;
    case obj instanceof :
      t = String;
    case obj instanceof :
      t = String;
    case obj instanceof :
      t = String;
    case obj instanceof :
      t = String;
    case obj instanceof :
      t = String;
    case obj instanceof :
      t = String;
  }

}

/**
 *
 *
 * @export
 * @param {string} typename
 * @return {*} 
 */
export const typeObject = function (typename: string): any | null | undefined {
  let t;
  switch (typename) {
    case 'string':
      t = String;
    case 'number':
      t = Number;
    case 'NaN':
      t = NaN;
    case 'boolean':
      t = Boolean;
    case 'null':
      t = null;
    case 'undefined':
      t = undefined;
    case 'array':
      t = Array;
    case 'function':
      t = Function;
    case 'map':
      t = Map;
    case 'symbol':
      t = Symbol;
    case 'object':
      t = Object;
    case 'set':
      t = Set;
    case 'Error':
      t = Error;
    case 'AggregateError':
      t = AggregateError;
    case 'EvalError':
      t = EvalError;
    case 'RangeError':
      t = RangeError;
    case 'ReferenceError':
      t = ReferenceError;
    case 'SyntaxError':
      t = SyntaxError;
    case 'TypeError':
      t = TypeError;
    case 'URIError':
      t = URIError;
    case 'InternalError':
      t = InternalError;
    case 'BigInt':
      t = BigInt;
    case 'Math':
      t = Math;
    case 'Date':
      t = Date;
    case 'RegExp':
      t = RegExp;
    case 'Int8Array':
      t = Int8Array;
    case 'Uint8Array':
      t = Uint8Array;
    case 'Uint8ClampedArray':
      t = Uint8ClampedArray;
    case 'Int16Array':
      t = Int16Array;
    case 'Uint16Array':
      t = Uint16Array;
    case 'Int32Array':
      t = Int32Array;
    case 'Uint32Array':
      t = Uint32Array;
    case 'BigInt64Array':
      t = BigInt64Array;
    case 'BigUint64Array':
      t = BigUint64Array;
    case 'Float32Array':
      t = Float32Array;
    case 'Float64Array':
      t = Float64Array;
    case 'WeakSet':
      t = WeakSet;
    case 'Set':
      t = Set;
    case 'ArrayBuffer':
      t = ArrayBuffer;
    case 'SharedArrayBuffer':
      t = SharedArrayBuffer;
    case 'DataView':
      t = DataView;
    case 'Atomics':
      t = Atomics;
    case 'JSON':
      t = JSON;
    case 'WeakRef':
      t = WeakRef;
    case 'FinalizationRegistry':
      t = FinalizationRegistry;
    case 'Iterator':
      t = Iterator;
    case 'AsyncIterator':
      t = AsyncIterator;
    case 'Promise':
      t = Promise;
    case 'GeneratorFunction':
      t = GeneratorFunction;
    case 'AsyncGeneratorFunction':
      t = AsyncGeneratorFunction;
    case 'Generator':
      t = Generator;
    case 'AsyncGenerator':
      t = AsyncGenerator;
    case 'AsyncFunction':
      t = AsyncFunction;
    case 'Reflect':
      t = Reflect;
    case 'Proxy':
      t = Proxy;
    case 'Intl':
      t = Intl;
    case 'Intl.Collator':
      t = Intl.Collator;
    case 'Intl.DateTimeFormat':
      t = Intl.DateTimeFormat;
    case 'Intl.DisplayNames':
      t = Intl.DisplayNames;
    case 'Intl.DurationFormat':
      t = Intl.DurationFormat;
    case 'Intl.ListFormat':
      t = Intl.ListFormat;
    case 'Intl.Locale':
      t = Intl.Locale;
    case 'Intl.NumberFormat':
      t = Intl.NumberFormat;
    case 'Intl.PluralRules':
      t = Intl.PluralRules;
    case 'Intl.RelativeTimeFormat':
      t = Intl.RelativeTimeFormat;
    case 'Intl.Segmenter':
      t = Intl.Segmenter;
    case 'WebAssembly':
      t = WebAssembly;
    case 'Worker':
      t = Worker;
    case 'ServiceWorkerContainer':
      t = ServiceWorkerContainer;
    case 'ServiceWorkerGlobalScope':
      t = ServiceWorkerGlobalScope;
    case 'FetchEvent':
      t = FetchEvent;
    case 'Event':
      t = Event;
    case 'globalThis':
      t = globalThis;
    case 'global':
      t = global;
    case 'DOM':
      t = DOM;
    case 'Navigator':
      t = Navigator;
    case 'Window':
      t = Window;
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    // case '':
    //   t = 
    case 'default':
      t = undefined;
  }
  return t;
}

/**
 *
 *
 * @export
 * @param {*} object
 * @return {*}  {(string | void)}
 */
export const is = function (object: any, returnType?: string): string | void {
  let tmpType;
  if (typeof object !== "object") {
    tmpType = typeof object;
  } else if (typeof object === "object") {
    if (object === null) { tmpType = "null" }
    else if (object instanceof Array) { tmpType = "array" }
    else if (object instanceof Map) { tmpType = "map" }
    else { tmpType = "object" };
  }
  if (!!returnType && returnType !== "string") {
    return typeObject(tmpType);
  }
  return tmpType;
}

/**
 *
 *
 * @export
 * @param {*} objectOne
 * @param {*} objectTwo
 * @return {*}  {boolean}
 */
export const deepEqual = function (objectOne: any, objectTwo: any): boolean {
  if (typeof objectOne !== "object") {
    if (typeof objectOne === typeof objectTwo) return true;
    return false;
  } else if (typeof objectOne === "object") {

    if (objectOne === null && objectTwo === null) {
      return true;
    }

    const keys1 = Object.keys(objectOne);
    const keys2 = Object.keys(objectTwo);

    if (keys1.length !== keys2.length) return false;

    for (let i = 0; i < keys1.length; i++) {
      const key1 = keys1[i];
      const key2 = keys2[i];
      if (!(key1 in keys2)) return false;

      const value1 = objectOne[key1];
      const value2 = objectTwo[key2];

      if (typeof value1 === 'object' && typeof value2 === 'object') {
        const keysMatch = deepEqual(value1, value2);
        if (!keysMatch) return false;
      }
    }

    if (objectOne instanceof Array && objectTwo instanceof Array) {
      return objectOne.toString() === objectTwo.toString();
    }

    return true;
  }
  return false;
}

export const matchTypes = deepEqual;

/**
 *
 *
 * @param {*} objectOne
 * @param {*} objectTwo
 * @return {*}  {boolean}
 */
export const matchValues = function (objectOne: any, objectTwo: any): boolean {
  if (typeof objectOne !== "object") {
    if (typeof objectOne === typeof objectTwo) return true;
    return false;
  } else if (typeof objectOne === "object") {

    if (objectOne === null && objectTwo === null) {
      return true;
    }

    const keys1 = Object.keys(objectOne);
    const keys2 = Object.keys(objectTwo);

    if (keys1.length !== keys2.length) return false;

    for (let i = 0; i < keys1.length; i++) {
      const key1 = keys1[i];
      const key2 = keys2[i];
      if (!(key1 in keys2)) return false;

      const value1 = objectOne[key1];
      const value2 = objectTwo[key2];

      if (typeof value1 === 'object' && typeof value2 === 'object') {
        const keysMatch = matchValues(value1, value2);
        if (!keysMatch) return false;
      } else {
        if (value1 !== value2) return false;
      }
    }

    if (objectOne instanceof Array && objectTwo instanceof Array) {
      return objectOne.toString() === objectTwo.toString();
    }

    return true;
  }
  return false;
}

// // Example usage:
// const objectOne = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3,
//   },
//   e: [4, 5, 6],
// };
// const objectTwo = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 4, // Different value
//   },
//   e: [4, 5, 6],
//   f: 7, // Extra key
// };
// const differences = deepObjectDiff(objectOne, objectTwo);
// console.log(differences); // Output: ['b.d', 'f']

/**
 *
 *
 * @export
 * @param {*} objectOne
 * @param {*} objectTwo
 * @return {*}  {*}
 */
export const diff = function (objectOne: any, objectTwo: any): any {
  const keys1 = Object.keys(objectOne);
  const keys2 = Object.keys(objectTwo);
  const uniqueKeys = new Set([...keys1, ...keys2]);
  const diffKeys = [...uniqueKeys].filter(key => {
    const val1 = objectOne[key];
    const val2 = objectTwo[key];
    if (typeof val1 === 'object' && typeof val2 === 'object') {
      return !(diff(val1, val2).length === 0);
      // return diff(val1, val2).length !== 0;
      // return !diff(val1, val2).length === 0;
    }
    return val1 !== val2;
  });
  return diffKeys;
}


// // Example usage:
// const objectOne = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3,
//   },
//   e: [4, 5, 6],
// };
// const objectTwo = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 4, // Different value
//   },
//   e: [4, 5, 6],
//   f: 7, // Extra key
// };
// const inter = intersection(objectOne, objectTwo);
// console.log(inter); // Output: ['a', 'b.c', 'e']

/**
 *
 *
 * @export
 * @param {*} objectOne
 * @param {*} objectTwo
 * @return {*}  {*}
 */
export const intersection = function (objectOne: any, objectTwo: any): any {
  const keys1 = Object.keys(objectOne);
  const keys2 = Object.keys(objectTwo);
  const commonKeys = keys1.filter(key => keys2.includes(key));
  const intersectionKeys = commonKeys.filter(key => {
    const val1 = objectOne[key];
    const val2 = objectTwo[key];
    if (typeof val1 === 'object' && typeof val2 === 'object') {
      return intersection(val1, val2).length > 0;
    }
    return val1 === val2;
  });
  return intersectionKeys;
}

