import test from 'ava';
import {prepareJQueryWithAssertPluginAndDOM} from './helpers';

test('jquery plugin exists and can be installed', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();

	t.truthy($.fn.assert);
});

test('passes current jquery elements', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();

	t.is($('p').length, 1);
	t.is($('p').assert(1).length, 1);
});

test('throws exception on unexpected selector length', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();

	t.throws(() => {
		$('p').assert(2);
	}, {
		message: 'Expected jQuery selector to return 2 elements. Got: 1'
	});
});

