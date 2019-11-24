import test from 'ava';
import {prepareJQueryWithAssertPluginAndDOM} from './helpers';

test('jquery plugin exists and can be installed', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();

	t.truthy($.fn.assert);
});

test('returns jquery object with the same elements', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();

	const $ones = $('.one');

	t.true($ones.assert(1) instanceof $);
	t.true($ones.assertOne() instanceof $);
	t.true($ones.assertMany() instanceof $);
	t.true($ones.assertAtLeast(1) instanceof $);

	t.is($ones.assert(1).length, 1);
	t.is($ones.assertOne().length, 1);
	t.is($ones.assertMany().length, 1);
	t.is($ones.assertAtLeast(1).length, 1);

	t.true($ones.is($ones.assert(1)));
	t.true($ones.is($ones.assertOne()));
	t.true($ones.is($ones.assertMany()));
	t.true($ones.is($ones.assertAtLeast(1)));
});
