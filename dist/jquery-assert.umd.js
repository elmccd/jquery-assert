(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['jquery-assert'] = factory());
}(this, (function () { 'use strict';

	var _assert = function _assert(actual, expected) {
	  if (actual !== expected) {
	    throw new Error("Expected jQuery selector to return ".concat(expected, " elements. Got: ").concat(actual));
	  }
	};

	var _assertGreaterThanEqual = function _assertGreaterThanEqual(actual, expected) {
	  if (actual < expected) {
	    throw new Error("Expected jQuery selector to return not less than ".concat(expected, " elements. Got: ").concat(actual));
	  }
	};

	var assert = function assert(expected) {
	  if (typeof expected === 'function') {
	    if (expected(this.length)) {
	      return this;
	    }

	    throw new Error("Expected jQuery selector to pass the condition. Got: ".concat(this.length, " results what didn't satisfy it."));
	  }

	  if (typeof expected === 'number') {
	    _assert(this.length, expected);

	    return this;
	  }

	  throw new Error('Assert method must be called with a number of function');
	};

	var assertOne = function assertOne() {
	  _assert(this.length, 1);

	  return this;
	};

	var assertMany = function assertMany() {
	  _assertGreaterThanEqual(this.length, 1);

	  return this;
	};

	var assertAtLeast = function assertAtLeast(minimum) {
	  _assertGreaterThanEqual(this.length, minimum);

	  return this;
	};

	var src = {
	  assert: assert,
	  assertOne: assertOne,
	  assertMany: assertMany,
	  assertAtLeast: assertAtLeast
	};

	window.jQuery.fn.extend(src);
	var umd = {};

	return umd;

})));
