import test from 'ava';
import {prepareJQueryWithAssertPluginAndDOM} from './helpers';

test('assertAtLeast with number returns itself if correct', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();
	const $ones = $('.one');

	t.true($ones.assertAtLeast(1).is($ones));
});

test('assertAtLeast throws exception on unexpected selector length', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();

	t.throws(() => {
		$('.none').assertAtLeast(1);
	}, {
		message: 'Expected jQuery selector to return not less than 1 elements. Got: 0'
	});

	t.throws(() => {
		$('.one').assertAtLeast(2);
	}, {
		message: 'Expected jQuery selector to return not less than 2 elements. Got: 1'
	});

	t.throws(() => {
		$('.two').assertAtLeast(3);
	}, {
		message: 'Expected jQuery selector to return not less than 3 elements. Got: 2'
	});
});

