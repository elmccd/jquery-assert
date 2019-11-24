'use strict';

const _assert = (actual, expected) => {
	if (actual !== expected) {
		throw new Error(`Expected jQuery selector to return ${expected} elements. Got: ${actual}`);
	}
};

const _assertGreaterThanEqual = (actual, expected) => {
	if (actual < expected) {
		throw new Error(`Expected jQuery selector to return not less than ${expected} elements. Got: ${actual}`);
	}
};

const assert = function (expected) {
	if (typeof expected === 'function') {
		if (expected(this.length)) {
			return this;
		}

		throw new Error(`Expected jQuery selector to pass the condition. Got: ${this.length} results what didn't satisfy it.`);
	}

	if (typeof expected === 'number') {
		_assert(this.length, expected);
		return this;
	}

	throw new Error('Assert method must be called with a number of function');
};

const assertOne = function () {
	_assert(this.length, 1);

	return this;
};

const assertMany = function () {
	_assertGreaterThanEqual(this.length, 1);

	return this;
};

const assertAtLeast = function (minimum) {
	_assertGreaterThanEqual(this.length, minimum);

	return this;
};

module.exports = {
	assert,
	assertOne,
	assertMany,
	assertAtLeast
};
