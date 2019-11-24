import test from 'ava';
import {prepareJQueryWithAssertPluginAndDOM} from './helpers';

test('assertMany with number returns itself if correct', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();
	const $ones = $('.one');

	t.true($ones.assertMany().is($ones));
});

test('assertMany throws exception on unexpected selector length', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();

	t.throws(() => {
		$('.none').assertMany();
	}, {
		message: 'Expected jQuery selector to return not less than 1 elements. Got: 0'
	});
});

