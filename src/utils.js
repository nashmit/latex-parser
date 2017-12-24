"use strict";
const ESCAPE = "\\";

/* 
 * Common utility functions 
 */

function type(x) {
    if (x === null) {
        return "null";
    }
    if (typeof x !== "object") {
        return typeof x;
    }
    if (Array.isArray(x)) {
        return "array";
    }
    return "object";
}

function callSuper(self, meth, args=[]) {
    // the same as super[meth](...args),
    // but can be used out of the `class` syntax
    return Object.getPrototypeOf(self.constructor).prototype[meth].call(self, ...args)
}

module.exports = {type, ESCAPE, callSuper}