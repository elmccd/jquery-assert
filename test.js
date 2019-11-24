import test from 'ava';
import jqueryAssert from '.';

test('title', t => {
	t.throws(() => {
		jqueryAssert(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(jqueryAssert('unicorns'), 'unicorns & rainbows');
});
