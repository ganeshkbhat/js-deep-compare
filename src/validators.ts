/**
 *
 * Package: jstypes
 * Author: Ganesh B
 * Description:
 * Install: npm i jstypes --save
 * Github: https://github.com/ganeshkbhat/jstypes
 * npmjs Link: https://www.npmjs.com/package/jstypes
 * File: .js
 * File Description:
 *
 *
*/

"use strict";

import { extendedtypes, inbuilt, typedefs } from "./defs";

/**
 *
 *
 * @param {*} obj
 * @return {*}
 */
export function getObjectMethods(obj: any) {
    const methods = [];
    for (const prop in obj) {
        if (typeof obj[prop] === "function") {
            methods.push(prop);
        }
    }
    return methods;
}

/**
 *
 *
 * @param {*} obj
 * @param {*} inst
 * @return {*}
 */
export function checkInstanceOfMethod(obj: any, inst) {
    let method;
    for (const prop in inst) {
        if (typeof inst[prop] === "function") {
            if (obj instanceof inst[prop]) {
                method = inst[prop];
                ;
            }
        }
        return false;
    }
}

// String
export function isString(obj: any) {
    return (
        typeof obj === "string" || obj instanceof String
    );
}

// Number
export function isNumber(obj: any) {
    return (
        typeof obj === "number" || obj instanceof Number
    );
}

// Boolean
export function isBoolean(obj: any) {
    return (
        obj instanceof Boolean || ((obj === true || obj === false) && typeof obj === "object")
    );
}

// null
export function isNull(obj: any) {
    return (
        obj === null && typeof obj === "object"
    );
}

// undefined
export function isUndefined(obj: any) {
    return (
        obj === undefined || typeof obj === "undefined"
    );
}

// BigInt
export function isBigInt(obj: any) {
    return (
        typeof obj === "bigint"
    );
}

// Symbol
export function isSymbol(obj: any) {
    return (
        typeof obj === "symbol"
    );
}

// Array
export function isArray(obj: any) {
    return (
        !!Array.isArray(obj) || obj instanceof Array
    );
}

// // Uint16Array
// export function Uint16Array(obj: any) { }

// // Uint32Array
// export function Uint32Array(obj: any) { }

// // Uint8Array
// export function Uint8Array(obj: any) { }

// // Uint8ClampedArray
// export function Uint8ClampedArray(obj: any) { }

// // Int16Array
// export function Int16Array(obj: any) { }

// // Int32Array
// export function Int32Array(obj: any) { }

// // Int8Array
// export function Int8Array(obj: any) { }

// // Float32Array
// export function Float32Array(obj: any) { }

// // Float64Array
// export function Float64Array(obj: any) { }

// // BigInt64Array
// export function BigInt64Array(obj: any) { }

// // BigUint64Array
// export function BigUint64Array(obj: any) { }

// // TypedArray - check all TypedArrays above
// export function TypedArray(obj: any) { }

// // ArrayBuffer
// export function ArrayBuffer(obj: any) { }

// // SharedArrayBuffer
// export function SharedArrayBuffer(obj: any) { }

// Set
export function isSet(obj: any) {
    return (Set.prototype.isPrototypeOf(obj) || obj instanceof Set);
}

// Object
export function isObject(obj: any) {
    return obj instanceof Object || typeof obj === "object";
}

// Function
export function isFunction(obj: any) {
    return (
        typeof obj === "function" ||
        Boolean(obj && obj.constructor && obj.call && obj.apply)
    );
}

// AsyncFunction
export function isAsyncFunction(obj: any) {
    return (
        typeof obj === "function" ||
        Boolean(obj && obj.constructor && obj.call && obj.apply)
    );
}

// globalThis
export function isGlobalThis(obj: any) {
    return (
        typeof obj === "function" ||
        Boolean(obj && obj.constructor && obj.call && obj.apply)
    );
}

// Generator
export function isGenerator(obj: any) {
    return (
        typeof obj === "function" ||
        Boolean(obj && obj.constructor && obj.call && obj.apply && obj.constructor.name === "GeneratorFunction")
    );
}

// GeneratorFunction
export function isGeneratorFunction(obj: any) {
    return (
        typeof obj === "function" ||
        Boolean(obj && obj.constructor && obj.call && obj.apply && obj.constructor.name === "AsyncGeneratorFunction")
    );
}

// AsyncGenerator
export function isAsyncGenerator(obj: any) {
    return (
        typeof obj === "function" ||
        Boolean(obj && obj.constructor && obj.call && obj.apply && obj.constructor.name === "AsyncGenerator")
    );
}

// AsyncGeneratorFunction
export function isAsyncGeneratorFunction(obj: any) {
    return (
        typeof obj === "function" ||
        Boolean(obj && obj.constructor && obj.call && obj.apply && obj.constructor.name === "AsyncGeneratorFunction")
    );
}

// Promise
export function isPromise(obj: any) {
    // https://debugpointer.com/featured/check-if-an-object-is-a-promise
    return (
        (!!obj) &&
        (typeof obj === "object" || typeof obj === "function") &&
        (obj.constructor && obj.call && obj.apply) &&
        (
            obj instanceof Promise ||
            Object.prototype.toString.call(obj) === "[object Promise]" ||
            Boolean(obj.constructor.name === "Promise") ||
            (typeof obj.then === "function")
        )
    );
}

// decodeURI()
export function isDecodeURI(obj: any) {
    return (
        !!obj &&
        !!isFunction(obj) &&
        obj.name === "decodeURI"
    );
}

// decodeURIComponent()
export function isDecodeURIComponent(obj: any) {
    return (
        !!obj &&
        !!isFunction(obj) &&
        obj.name === "decodeURIComponent"
    );
}

// encodeURI()
export function isEncodeURI(obj: any) {
    return (
        !!obj &&
        !!isFunction(obj) &&
        obj.name === "encodeURI"
    );
}

// encodeURIComponent()
export function isEncodeURIComponent(obj: any) {
    return (
        !!obj &&
        !!isFunction(obj) &&
        obj.name === "encodeURIComponent"
    );
}

// Deprecatedunescape()
export function isDeprecatedunescape(obj: any) {
    return (
        !!obj &&
        !!isFunction(obj) &&
        obj.name === "unescape"
    );
}

// Deprecatedescape()
export function isDeprecatedescape(obj: any) {
    return (
        !!obj &&
        !!isFunction(obj) &&
        obj.name === "escape"
    );
}

// eval()
export function isEval(obj: any) {
    return (
        !!obj &&
        !!isFunction(obj) &&
        obj.name === "eval"
    );
}

// Error
export function isError(obj: any) {
    return typeof obj === "object" || obj instanceof Error;
}

// EvalError
export function isEvalError(obj: any) {
    return typeof obj === "object" || obj instanceof EvalError;
}

// RangeError
export function isRangeError(obj: any) {
    return typeof obj === "object" || obj instanceof RangeError;
}

// ReferenceError
export function isReferenceError(obj: any) {
    return typeof obj === "object" || obj instanceof ReferenceError;
}

// SyntaxError
export function isSyntaxError(obj: any) {
    return typeof obj === "object" || obj instanceof SyntaxError;
}

// TypeError
export function isTypeError(obj: any) {
    return typeof obj === "object" || obj instanceof TypeError;
}

// URIError
export function isURIError(obj: any) {
    return typeof obj === "object" || obj instanceof URIError;
}

// AggregateError
export function isAggregateError(obj: any) {
    // // AggregateError error - import it
    return typeof obj === "object" || obj instanceof AggregateError;
}

// // Non-standardInternalError
// export function isNonStandardInternalError(obj: any) { }

// Map
export function isMap(obj: any) {
    return (typeof obj === "object" || typeof obj === "function") || obj instanceof Map || Map.name === "Map";
}

// WeakMap
export function isWeakMap(obj: any) {
    return (typeof obj === "object" || typeof obj === "function") || obj instanceof WeakMap || WeakMap.name === "WeakMap";
}

// WeakRef
export function isWeakRef(obj: any) {
    // // WeakRef error - import it
    // return (typeof obj === "object" || typeof obj === "function") || obj instanceof WeakRef || WeakRef.name === "WeakRef";
}

// WeakSet
export function isWeakSet(obj: any) {
    return (typeof obj === "object" || typeof obj === "function") || obj instanceof WeakSet || WeakSet.name === "WeakMap";
}

// DataView
export function isDataView(obj: any) {
    return (typeof obj === "object" || typeof obj === "function") || typeof obj === "object" || obj instanceof DataView || DataView.name === "WeakMap";
}

// Date
export function isDate(obj, dateFormat) {
    try {
        return (!!new Date(obj) || !isNaN(new Date(obj)) || obj.length === dateFormat.length);
    } catch (e) {
        return false;
    }
}

// Date
export function isDateObject(obj: any) {
    return typeof obj === "object" && obj.constructor === Date.constructor;
}

// JSON
export function isJSON(obj: any) {
    try { return !!JSON.parse(obj); } catch (e) { return false; }
}

// JSON
export function isJSONMethod(obj: any) {
    // return typeof obj === 'object' && obj.constructor === JSON.constructor;
}

// Proxy
export function isProxy(obj: any) {
    return typeof obj === "object" || obj instanceof Proxy;
}

// Reflect
export function isReflect(obj: any) {
    // // Reflect error - check validation again
    // return typeof obj === "object" || obj instanceof Reflect;
}

// ReflectMethod
export function isReflectMethod(obj: any) {
    // const reflectFunction = Reflect.get;
    // console.log(isReflectFunction(reflectFunction));   // true
    return (typeof obj === "function" && Reflect.hasOwnProperty(obj.name)) || (typeof obj === "function" && Reflect[obj.name] === obj);
}

// ReflectMethod
export function isReflectMethodInstance(obj: any) {
    // const reflectFunction = Reflect.get;
    // console.log(isReflectFunction(reflectFunction));   // true
    return (typeof obj === "function" && Reflect.hasOwnProperty(obj.name)) || (typeof obj === "function" && obj instanceof Reflect[obj.name]);
}

// RegExp
export function isRegExp(obj: any) {
    return typeof obj === "object" || obj instanceof RegExp;
}

// Intl
export function isIntl(obj: any) {
    return typeof obj === "object" && obj.constructor === Intl.constructor;
}

// IntlMethod
export function isIntlMethod(obj: any) {
    return checkInstanceOfMethod(obj, Intl);
}

// // FinalizationRegistry
// export function isFinalizationRegistry(obj: any) {
// }

// Math
export function isMath(obj: any) {
    return typeof obj === "object" && obj.constructor === Math.constructor;
}

// MathMethod
export function isMathMethod(obj: any) {
    return checkInstanceOfMethod(obj, Math);
}

// // parseFloat()
// export function isFloat(obj: any) {
// }

// isNotNaN() notNaN() isInteger()
export function notNaN(obj: any) {
    return !isNaN(obj) || typeof obj === "number" || typeof obj === "bigint";
}

// isNotNaN() notNaN() isInteger()
const isNotNaN = notNaN;
const isInteger = notNaN;

// NaN
export function isNaN(obj: any) {
    return isNaN(obj);
}

// Infinity
export function isInfinity(obj: any) {
    return !isFinite(obj);
}

// isFinite()
export function isFinite(obj: any) {
    return !!isFinite(obj);
}

// isFinite()
export function isFiniteFunction(obj: any) {
    return typeof obj === "function" && obj.name === "isFinite";
}

// Atomics
export function isAtomics(obj: any) {
    return typeof obj === "object" && (obj.constructor === Atomics.constructor || Atomics === Atomics);
}

// Atomics
export function isAtomicsMethod(obj: any) {
    return checkInstanceOfMethod(obj, Atomics);
}

// export function isType(obj: any, typeStringName: string) {
//     return (
//         typeof obj === typeStringName ||
//         Boolean(obj && obj.constructor && obj.call && obj.apply)
//     );
//     // return (
//     //     typeof obj === typeStringName ||
//     //     Boolean(obj && obj.constructor && obj.call && obj.apply)
//     // );
// }

export default {
    // isString,
    // isNumber,
    // isBoolean,
    // isNull,
    // isUndefined,
    // isBigInt,
    // isSymbol,
    // isArray,
    // Uint16Array,
    // Uint32Array,
    // Uint8Array,
    // Uint8ClampedArray,
    // Int16Array,
    // Int32Array,
    // Int8Array,
    // Float32Array,
    // Float64Array,
    // BigInt64Array,
    // BigUint64Array,
    // // TypedArray,
    // ArrayBuffer,
    // SharedArrayBuffer,
    // isObject,
    // isFunction,
    // isAsyncFunction,
    // isGlobalThis,
    // isGenerator,
    // isGeneratorFunction,
    // isAsyncGenerator,
    // isAsyncGeneratorFunction,
    // isPromise,
    // isDecodeURI,
    // isDecodeURIComponent,
    // isEncodeURI,
    // isEncodeURIComponent,
    // isDeprecatedunescape,
    // isDeprecatedescape,
    // isEval,
    // isError,
    // isEvalError,
    // isRangeError,
    // isReferenceError,
    // isSyntaxError,
    // isTypeError,
    // isURIError,
    // isAggregateError,
    // // isNonStandardInternalError,
    // isMap,
    // isWeakMap,
    // isWeakRef,
    // isWeakSet,
    // isSet,
    // isDataView,
    // isDate,
    // isJSON,
    // isProxy,
    // isReflect,
    // isRegExp,
    // isIntl,
    // // isFinalizationRegistry,
    // isMath,
    // // isFloat,
    // isNotNaN,
    // isNaN,
    // isInteger,
    // isInfinity,
    // isFinite,
    // isFiniteFunction,
    // isAtomics,
    // // isType,
    // inbuilt,
    // extendedtypes,
    // typedefs,

    getObjectMethods,
    checkInstanceOfMethod,
    isString,
    isNumber,
    isBoolean,
    isNull,
    isUndefined,
    isBigInt,
    isSymbol,
    isArray,
    Uint16Array,
    Uint32Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Int32Array,
    Int8Array,
    Float32Array,
    Float64Array,
    BigInt64Array,
    BigUint64Array,
    // TypedArray,
    ArrayBuffer,
    SharedArrayBuffer,
    isSet,
    isObject,
    isFunction,
    isAsyncFunction,
    isGlobalThis,
    isGenerator,
    isGeneratorFunction,
    isAsyncGenerator,
    isAsyncGeneratorFunction,
    isPromise,
    isDecodeURI,
    isDecodeURIComponent,
    isEncodeURI,
    isEncodeURIComponent,
    isDeprecatedunescape,
    isDeprecatedescape,
    isEval,
    isError,
    isEvalError,
    isRangeError,
    isReferenceError,
    isSyntaxError,
    isTypeError,
    isURIError,
    isAggregateError,
    // isNonStandardInternalError,
    isMap,
    isWeakMap,
    isWeakRef,
    isWeakSet,
    isDataView,
    isDate,
    isDateObject,
    isJSON,
    isJSONMethod,
    isProxy,
    isReflect,
    isReflectMethod,
    isReflectMethodInstance,
    isRegExp,
    isIntl,
    isIntlMethod,
    // isFinalizationRegistry,
    isMath,
    isMathMethod,
    // isFloat,
    notNaN,
    isNotNaN,
    isInteger,
    isNaN,
    isInfinity,
    isFinite,
    isFiniteFunction,
    isAtomics,
    isAtomicsMethod,
    inbuilt,
    extendedtypes,
    typedefs
};
