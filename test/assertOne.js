import test from 'ava';
import {prepareJQueryWithAssertPluginAndDOM} from './helpers';

test('assertOne with number returns itself if correct', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();
	const $ones = $('.one');

	t.is($ones.assertOne().length, 1);
	t.true($ones.assertOne().is($ones));
});

test('assertOne throws exception on unexpected selector length', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();

	t.throws(() => {
		$('.two').assertOne();
	}, {
		message: 'Expected jQuery selector to return 1 elements. Got: 2'
	});
});

