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

import * as defs from "./defs";
import * as types from "./types";
import * as validator from "./validators";

export const definitions = defs;
export const typeChecks = types;
export const validators = validator;

export default {
  definitions, typeChecks, validators
};
