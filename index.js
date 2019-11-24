'use strict';

module.exports = jquery => {
	const assert = (actual, expected) => {
		if (actual !== expected) {
			throw new Error(`Expected jQuery selector to return ${expected} elements. Got: ${actual}`);
		}
	};

	const assertGreaterThanEqual = (actual, expected) => {
		if (actual < expected) {
			throw new Error(`Expected jQuery selector to return not less than ${expected} elements. Got: ${actual}`);
		}
	};

	jquery.fn.assert = function (expected) {
		if (typeof expected === 'function') {
			if (expected(this.length)) {
				return this;
			}

			throw new Error(`Expected jQuery selector to pass the condition. Got: ${this.length} results what didn't satisfy it.`);
		}

		if (typeof expected === 'number') {
			assert(this.length, expected);
			return this;
		}

		throw new Error('assert method must be called with a number of function');
	};

	jquery.fn.assertOne = function () {
		assert(this.length, 1);

		return this;
	};

	jquery.fn.assertMany = function () {
		assertGreaterThanEqual(this.length, 1);

		return this;
	};

	jquery.fn.assertAtLeast = function (minimum) {
		assertGreaterThanEqual(this.length, minimum);

		return this;
	};
};
