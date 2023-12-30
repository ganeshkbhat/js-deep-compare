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

"use strict";

export const inbuilt = ["string", "number", "boolean", "null", "undefined", "bigint", "symbol", "set", "array", "object", "function"];
export const extendedtypes = [...inbuilt, "float", "nan"];
export const typedefs = [...extendedtypes,
    "String", "Boolean", "Math", "Number", "BigInt", "Float", "Symbol", "Object", "null", "undefined", "NaN",
    "Infinity", /*non-js object*/ "Finite", "Atomics", "globalThis",
    "Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Int8Array",
    "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array", /*non-js object*/ "TypedArray", "ArrayBuffer", "SharedArrayBuffer",
    "Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "AggregateError", "Non-standardInternalError",
    "Function", "AsyncFunction", "Generator", "GeneratorFunction", "AsyncGenerator", "AsyncGeneratorFunction",
    "Promise", /*non-js object*/ "URIComponent", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "Deprecatedunescape", "Deprecatedescape",
    "Map", "WeakMap", "WeakRef", "WeakSet", "Set",
    "DataView", "Date", "JSON", "Proxy", "Reflect", "RegExp", "Intl", "FinalizationRegistry"
];


// undefined
// String
// Boolean

// Math

// Number
// parseInt()
// BigInt
// parseFloat()
// isNaN()
// NaN
// Infinity
// isFinite()
// Atomics
// Symbol

// Array

// Uint16Array
// Uint32Array
// Uint8Array
// Uint8ClampedArray

// Int16Array
// Int32Array
// Int8Array

// Float32Array
// Float64Array

// BigInt64Array
// BigUint64Array

// TypedArray

// ArrayBuffer
// SharedArrayBuffer

// Error

// EvalError
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError
// AggregateError
// Non-standardInternalError

// Function
// AsyncFunction

// globalThis

// Generator
// GeneratorFunction
// AsyncGenerator
// AsyncGeneratorFunction
// Promise

// URIComponent

// decodeURI()
// decodeURIComponent()
// encodeURI()
// encodeURIComponent()
// Deprecatedunescape()
// Deprecatedescape()
// eval()

// Map
// WeakMap

// Object
// WeakRef

// WeakSet
// Set

// DataView
// Date

// JSON
// Proxy

// Reflect
// RegExp

// Intl
// FinalizationRegistry
