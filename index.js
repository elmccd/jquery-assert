'use strict';

module.exports = jquery => {
	jquery.fn.assert = function (expected) {
		if (this.length !== expected) {
			throw new Error(`Expected jQuery selector to return ${expected} elements. Got: ${this.length}`);
		}

		return this;
	};
};
