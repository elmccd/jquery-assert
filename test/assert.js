import test from 'ava';
import {prepareJQueryWithAssertPluginAndDOM} from './helpers';

test('assert with number returns itself if correct', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();
	const $ones = $('.one');

	t.throws(() => {
		$ones.assert();
	}, {
		message: 'Assert method must be called with a number of function'
	});
});

test('assert throw error if passed invalid argument', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();
	const $ones = $('.one');
	const $twos = $('.two');

	t.is($ones.assert(1).length, 1);
	t.is($twos.assert(2).length, 2);

	t.true($ones.assert(1).is($ones));
	t.true($twos.assert(2).is($twos));
});

test('assert throws exception on unexpected selector length', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();

	t.throws(() => {
		$('.one').assert(2);
	}, {
		message: 'Expected jQuery selector to return 2 elements. Got: 1'
	});

	t.throws(() => {
		$('.two').assert(1);
	}, {
		message: 'Expected jQuery selector to return 1 elements. Got: 2'
	});
});

test('assert with function returns itself if correct', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();
	const $ones = $('.one');
	const $twos = $('.two');

	const condition = n => n === 1 || n === 2;

	t.is($ones.assert(condition).length, 1);
	t.is($twos.assert(condition).length, 2);

	t.true($ones.assert(condition).is($ones));
	t.true($twos.assert(condition).is($twos));
});

test('assert with function condition throws exception on unexpected selector length', t => {
	const $ = prepareJQueryWithAssertPluginAndDOM();

	const condition = n => n === 1 || n === 2;

	t.throws(() => {
		$('.three').assert(condition);
	}, {
		message: 'Expected jQuery selector to pass the condition. Got: 3 results what didn\'t satisfy it.'
	});

	t.throws(() => {
		$('.none').assert(condition);
	}, {
		message: 'Expected jQuery selector to pass the condition. Got: 0 results what didn\'t satisfy it.'
	});
});
